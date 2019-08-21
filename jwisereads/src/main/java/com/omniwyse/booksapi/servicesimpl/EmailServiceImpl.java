package com.omniwyse.booksapi.servicesimpl;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.commons.Converter;
import com.omniwyse.booksapi.commons.ValidationMessages;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.dto.CheckedOutBookDTO;
import com.omniwyse.booksapi.dto.UserBooksDTO;
import com.omniwyse.booksapi.entity.CheckOutPaymentEntity;
import com.omniwyse.booksapi.entity.CheckedOutBookEntity;
import com.omniwyse.booksapi.repo.BooksCheckoutRepo;
import com.omniwyse.booksapi.repo.CheckOutPaymentRepo;
import com.omniwyse.booksapi.services.BooksCheckoutService;
import com.omniwyse.booksapi.services.EmailService;
import com.omniwyse.booksapi.utils.DateUtils;
import com.omniwyse.booksapi.utils.EmailData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collectors;

import static com.omniwyse.booksapi.commons.ValidationKeys.WISE_READS_LOGO_PATH;

@Service
public class EmailServiceImpl implements EmailService {

	private static final Logger LOGGER = LoggerFactory.getLogger(EmailServiceImpl.class);

	private BooksCheckoutRepo booksCheckoutRepo;
	private CheckOutPaymentRepo checkOutPaymentRepo;
	private BooksCheckoutService booksCheckoutService;
	private TransactionalConfig transactionalConfig;
	private JavaMailSender javaMailSender;
	private ValidationMessages validationMessages;

	@Autowired
	public EmailServiceImpl(BooksCheckoutRepo booksCheckoutRepo, CheckOutPaymentRepo checkOutPaymentRepo,
			BooksCheckoutService booksCheckoutService, TransactionalConfig transactionalConfig,
			JavaMailSender javaMailSender, ValidationMessages validationMessages) {
		this.booksCheckoutRepo = booksCheckoutRepo;
		this.checkOutPaymentRepo = checkOutPaymentRepo;
		this.booksCheckoutService = booksCheckoutService;
		this.transactionalConfig = transactionalConfig;
		this.javaMailSender = javaMailSender;
		this.validationMessages = validationMessages;
	}

	@Override
	public void sendEmailRemindersForDueBooks() {

		LOGGER.info("Start : com.omniwyse.booksapi.servicesimpl.sendEmailRemindersForDueBooks()");
		List<CheckedOutBookDTO> rentalBooks = booksCheckoutRepo.findAllByStatus("2");
		List<UserBooksDTO> usersBooks = new ArrayList<>();
		List<Long> userIdslist = new ArrayList<>();
		if (!rentalBooks.isEmpty()) {
			rentalBooks.stream().filter(Objects::nonNull).forEach(rentalBook -> {
				long daysDiff = DateUtils.getDaysDiff(new Date(), rentalBook.getExpReturnDate());
				LOGGER.info("Days diff " + daysDiff);
				boolean isBookReturnPending = false;
				if (daysDiff == -1) {
					daysDiff = daysDiff + 2;
					isBookReturnPending = true;
					LOGGER.info("You have " + 2 + " days remaining");
				} else if (daysDiff == 0) {
					daysDiff = daysDiff + 1;
					isBookReturnPending = true;
					LOGGER.info("You have " + 1 + " days remaining");
				} else if (daysDiff >= 0) {
					isBookReturnPending = true;
					rentalBook.setOverDue(true);
					rentalBook.setExpReturnDate(new Date());
					LOGGER.info("You have " + daysDiff + " days over due");
				}
				rentalBook.setDueDays(daysDiff);
				if (isBookReturnPending) {
					CheckedOutBookEntity checkedOutBookEntity = booksCheckoutRepo
							.findByCheckedOutId(rentalBook.getCheckoutId());
					// if (rentalBook.isOverDue()) {
					CheckedOutBookEntity checkOutbook = booksCheckoutService.calculateRentAmountOfBook(rentalBook);
					CheckOutPaymentEntity paymentEntity = checkOutPaymentRepo.findByPaymentId(rentalBook.getOrderId());
					checkedOutBookEntity.setTotalAmount(checkOutbook.getTotalAmount());
					checkedOutBookEntity.setModifiedOn(new Timestamp(new Date().getTime()));
					paymentEntity.setTotalOrderAmount(checkOutbook.getTotalAmount());
					paymentEntity.setModifiedOn(new Timestamp(new Date().getTime()));

					if (paymentEntity.getTotalAmountPaid() != null) {
						paymentEntity.setDueAmount(
								paymentEntity.getTotalOrderAmount().subtract(paymentEntity.getTotalAmountPaid()));
					} else {
						paymentEntity.setDueAmount(paymentEntity.getTotalOrderAmount());
					}
					// Set the updated due amount to email data
					rentalBook.setDueAmount(paymentEntity.getDueAmount());
					try {
						// Start transaction
						transactionalConfig.startTransaction();
						booksCheckoutRepo.update(checkedOutBookEntity);
						checkOutPaymentRepo.update(paymentEntity);
						// End of transaction
						transactionalConfig.commit();
					} catch (DbException e) {
						transactionalConfig.rollBack();
						LOGGER.error("Error occurred , Payment id " + paymentEntity.getOrderId());
					}
					// }
					rentalBook.setExpReturnDate(checkedOutBookEntity.getExpReturnDate());
					if (!userIdslist.contains(rentalBook.getUserId())) {
						UserBooksDTO userBooksDTO = new UserBooksDTO();
						userBooksDTO.setUserId(rentalBook.getUserId());
						userBooksDTO.setEmail(rentalBook.getUserEmail());
						userBooksDTO.setUserFullName(rentalBook.getUserFirstName());
						List<CheckedOutBookDTO> userBooks = new ArrayList<>();
						if (rentalBook.getDueAmount().compareTo(BigDecimal.ZERO) > 0) {
							rentalBook.setAmountPaid(paymentEntity.getTotalAmountPaid());
							userBooks.add(rentalBook);
						}
						userBooksDTO.setBooks(userBooks);
						usersBooks.add(userBooksDTO);
						userIdslist.add(rentalBook.getUserId());
					} else {
						usersBooks.stream().filter(userBooksData -> userBooksData.getUserId() == rentalBook.getUserId())
								.forEach(userBooksData -> {
									List<CheckedOutBookDTO> userBooks;
									if (userBooksData.getBooks() == null || userBooksData.getBooks().isEmpty()) {
										userBooks = new ArrayList<>();
									} else {
										userBooks = userBooksData.getBooks();
									}
									if (rentalBook.getDueAmount().compareTo(BigDecimal.ZERO) > 0) {
										rentalBook.setAmountPaid(paymentEntity.getTotalAmountPaid());
										userBooks.add(rentalBook);
									}
									userBooksData.setBooks(userBooks);
								});
					}
				}
			});
			if (!usersBooks.isEmpty()) {
				usersBooks.forEach(userBook -> {
					if (userBook.getBooks() != null && !userBook.getBooks().isEmpty()) {
						sendEmails(prepareEmailObj(userBook));
						LOGGER.info("Email sent successfully to " + userBook.getUserFullName());
					}
				});
			}

		} else {
			LOGGER.info("No over due books found");
		}

		LOGGER.info("End : com.omniwyse.booksapi.servicesimpl.sendEmailRemindersForDueBooks()");

	}

	private EmailData prepareEmailObj(UserBooksDTO userBooksDTO) {
		EmailData emailData = new EmailData();
		emailData.setMailRecipients(Arrays.asList(userBooksDTO.getEmail()));
		// emailData.setMailRecipients(Arrays.asList("harishyadav.t26@gmail.com"));
		emailData.setSubject("Due date reminder for your book rentals");
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.append("<html>Dear ");
		stringBuilder.append(Converter.capitalFirstLetter(userBooksDTO.getUserFullName()));
		stringBuilder.append(",<br><br>Greetings from Wise reads,");
		stringBuilder.append("<br>Thank you for borrowing books from Wise reads.");
		stringBuilder.append(
				"This is a gentle reminder to inform you that the due date is approaching for the following books: <br>");
		userBooksDTO.getBooks().stream().filter(Objects::nonNull).forEach(rentalBook -> {
			stringBuilder.append(
					"<br><div style='background-color: #f2f2f2;width:400px;color:black;border-radius: 25px;border: 2px solid navy;padding: 20px;'>");
			stringBuilder.append("<Strong> Title: </strong> ");
			stringBuilder.append(rentalBook.getTitle());
			stringBuilder.append("<br><Strong> Checked out date: </strong> ");
			stringBuilder.append(DateUtils.convertDate(rentalBook.getCheckedOutDate()));
			stringBuilder.append("<br><Strong> Due Date: </strong> ");
			stringBuilder.append(DateUtils.convertDate(rentalBook.getExpReturnDate()));
			stringBuilder.append("<br><Strong> Amount paid : </strong> ");
			stringBuilder.append(rentalBook.getAmountPaid());
			stringBuilder.append("<br><Strong> Due amount: </strong> ");
			stringBuilder.append(rentalBook.getDueAmount());
			if (rentalBook.isOverDue()) {
				stringBuilder.append(" (till today)");
				stringBuilder.append("<br><Strong> Over Due days : </strong> ");
				stringBuilder.append(rentalBook.getDueDays());
			} else {
				stringBuilder.append("<br><Strong> Remaining days : </strong> ");
				stringBuilder.append(rentalBook.getDueDays());
			}
			stringBuilder.append("<br><Strong> Rent per day : </strong> ");
			stringBuilder.append(rentalBook.getRentPerDay());
			stringBuilder.append("</div>");
		});
		stringBuilder.append(
				"<br>We hope you enjoyed reading the book.Please log on to our website http://www.wisereads.in to extend your due dates.");
		stringBuilder.append("<br>If you have any other queries please write to info@wisereads.in.");
		stringBuilder.append("<br><br>Keep reading,");
		stringBuilder.append("<br>Wise reads Team.");
		stringBuilder.append("<br><img src='cid:wiseReadsLogo' style='float:left;width:170px;height:55px;'/></html>");

		emailData.setText(stringBuilder.toString());
		return emailData;
	}

	private void sendEmails(EmailData emailData) {
		LOGGER.info("Scheduler called :: Sending emails");
		try {
			sendEmailNotification(emailData);
		} catch (MessagingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	private void sendEmailNotification(EmailData emailData) throws MessagingException, IOException {
		MimeMessage msg = javaMailSender.createMimeMessage();
		// true = multipart message
		MimeMessageHelper helper = new MimeMessageHelper(msg, true);
		if (emailData != null) {
			if (!emailData.getMailRecipients().isEmpty()) {
				try {
					helper.setTo(InternetAddress
							.parse(emailData.getMailRecipients().stream().collect(Collectors.joining(","))));
				} catch (MessagingException e) {
					LOGGER.error("Error  occurred ", e);
				}
			}
			helper.setFrom("wisereads1@gmail.com","Wise Reads");
			helper.setSubject(emailData.getSubject());
			// true = text/html
			helper.setText(emailData.getText(), true);
			try {
				File file = new File(validationMessages.getValidationMessage(WISE_READS_LOGO_PATH));
				helper.addInline("wiseReadsLogo",file );
			}catch(Exception e) {
				LOGGER.error("Wise reads logo is not found..", e);
			}
			javaMailSender.send(msg);
		}
	}
}
