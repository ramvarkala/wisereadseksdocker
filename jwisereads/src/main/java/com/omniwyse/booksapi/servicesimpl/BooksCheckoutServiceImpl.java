package com.omniwyse.booksapi.servicesimpl;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.commons.Converter;
import com.omniwyse.booksapi.commons.ValidationMessages;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.dto.BookDTO;
import com.omniwyse.booksapi.dto.CheckOutPaymentDTO;
import com.omniwyse.booksapi.dto.CheckedOutBookDTO;
import com.omniwyse.booksapi.entity.*;
import com.omniwyse.booksapi.exceptions.BookAlreadyCheckedOutException;
import com.omniwyse.booksapi.exceptions.EmptyExpectedReturnedDateException;
import com.omniwyse.booksapi.exceptions.MaxCheckOutBooksException;
import com.omniwyse.booksapi.exceptions.RecordNotFoundException;
import com.omniwyse.booksapi.repo.*;
import com.omniwyse.booksapi.services.BooksCheckoutService;
import com.omniwyse.booksapi.utils.DateUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collectors;

import static com.omniwyse.booksapi.commons.ExceptionMessagesKeys.BOOK_NOT_FOUND;
import static com.omniwyse.booksapi.constants.AppConstants.DEFAULT_CHECKOUT_STATUS_ID;
import static com.omniwyse.booksapi.constants.AppConstants.MAX_CHECKOUT_BOOKS_PARAM_ID;

@Service
public class BooksCheckoutServiceImpl implements BooksCheckoutService {

	private static final Logger LOGGER = LoggerFactory.getLogger(BooksCheckoutServiceImpl.class);
	private static final String ALL_BOOKS_RETURNED = "allBooksReturned";

	@Autowired
	private BooksCheckoutRepo booksCheckoutRepo;

	@Autowired
	private ValidationMessages validationMessages;

	@Autowired
	private BooksInventoryRepo booksInventoryRepo;

	@Autowired
	private BooksRepo booksRepository;

	@Autowired
	private Converter converter;

	@Autowired
	private CheckOutPaymentRepo checkOutPaymentRepo;

	@Autowired
	private ParameterRepo parameterRepo;

	@Autowired
	private TransactionalConfig transactionConfig;

	@Override
	public Map<Object, Object> saveCheckedOutBooks(final CheckOutPaymentDTO checkOutPaymentDetails) {
		LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.saveCheckedOutBook()");
		final Map<Object, Object> response = new HashMap<>();

		ParametersEntity maxBooksParameter = parameterRepo.findByParamId(MAX_CHECKOUT_BOOKS_PARAM_ID);

		if (checkOutPaymentDetails.getCheckedOutBooksList() != null && maxBooksParameter != null) {
			int maxBooks = (int) maxBooksParameter.getParamValue();
			if (checkOutPaymentDetails.getCheckedOutBooksList().size() > maxBooks) {
				LOGGER.debug("Exceeds maximum check out number");
				if (maxBooks > 0) {
					throw new MaxCheckOutBooksException(
							"The maximum number of checked out books should not exceed " + maxBooks);
				} else {
					throw new MaxCheckOutBooksException("Currently checkout books service is not available");
				}
			}
		}
		List<Long> statuses = new ArrayList<>();
		statuses.add(1L);
		statuses.add(2L);
		statuses.add(3L);
		checkOutPaymentDetails.getCheckedOutBooksList().stream().filter(Objects::nonNull).forEach(checkOutBook -> {
			/*final CheckedOutBookEntity checkedOutBook = booksCheckoutRepo
					.findByInventoryId(checkOutBook.getInventoryId());
			if (checkedOutBook != null && statuses.contains(checkedOutBook.getCheckedItatusId())) {
				BookDTO book = booksRepository.findDetailsByBookId(checkedOutBook.getBookId());
				throw new BookAlreadyCheckedOutException("The book is out of stock", book.getTitle(),
						checkedOutBook.getInventoryId());
			}*/
			if (checkOutBook.getExpReturnDate() == null) {
				BookDTO book = booksRepository.findDetailsByBookId(checkOutBook.getBookId());
				throw new EmptyExpectedReturnedDateException("Expected returned date can not be empty", book.getTitle(),
						checkOutBook.getInventoryId());
			}
		});
		if (!response.isEmpty()) {
			return response;
		}

		final Map<Object, Object> data = calculateNewOrderDetails(checkOutPaymentDetails);
		final CheckOutPaymentEntity checkOutPayment = (CheckOutPaymentEntity) data.get("newOrderDetails");

		try {
			// Transaction start
			transactionConfig.startTransaction();

			checkOutPaymentRepo.save(checkOutPayment);

			checkOutPayment.setCheckedOutBooks(
					checkOutPayment.getCheckedOutBooks().stream().filter(Objects::nonNull).map(checkedOutBook -> {
						checkedOutBook.setOrderId(checkOutPayment.getOrderId());
						final BooksInventoryEntity invBook = booksInventoryRepo
								.findByBookInvId(checkedOutBook.getInventoryId());
						invBook.setAvailabilityId(2);
						invBook.setCreatedBy(checkOutPaymentDetails.getCreatedBy());
						invBook.setModifiedOn(new Timestamp(new Date().getTime()));
						booksInventoryRepo.update(invBook);
						final CheckedOutBookEntity existingCopy = booksCheckoutRepo
								.findByInventoryId(checkedOutBook.getInventoryId());
						if (existingCopy != null && statuses.contains(existingCopy.getCheckedItatusId())) {
							BookDTO book = booksRepository.findDetailsByBookId(checkedOutBook.getBookId());
							transactionConfig.rollBack();
							throw new BookAlreadyCheckedOutException("The book is out of stock", book.getTitle(),
									checkedOutBook.getInventoryId());
						}
						return booksCheckoutRepo.save(checkedOutBook);
					}).collect(Collectors.toList()));
			response.put("orderDetails", checkOutPayment);
			transactionConfig.commit();
		} catch (DbException e) {
			transactionConfig.rollBack();
			throw new DbException(e.getMessage());
		}
		return response;
	}

	@Override
	public Map<Object, Object> updateCheckedOutBook(final long orderId,
			final CheckOutPaymentDTO checkOutPaymentDetails) {
		LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.updateCheckedOutBook()");
		final Map<Object, Object> response = new HashMap<>();
		response.put(ALL_BOOKS_RETURNED, true);
		if (checkOutPaymentDetails != null && checkOutPaymentDetails.getCheckedOutBooksList() != null) {
			checkOutPaymentDetails.getCheckedOutBooksList().stream().filter(Objects::nonNull)
					.forEach(checkedOutBook -> {
						if (checkedOutBook.getCheckedItatusId() == 2 && checkedOutBook.getReturnedDate() == null) {
							response.put("returnedDateError", "Returned date can not be empty");
							response.put(ALL_BOOKS_RETURNED, false);
						} else if (checkedOutBook.getCheckedItatusId() != 2
								&& checkedOutBook.getReturnedDate() != null) {
							response.put("statusError", "Status  must be selected as Checked in");
							response.put(ALL_BOOKS_RETURNED, false);
						} else if (checkedOutBook.getCheckedItatusId() != 2
								&& checkedOutBook.getReturnedDate() == null) {
							response.put(ALL_BOOKS_RETURNED, false);
						}
					});
		}
		if (response.containsKey("statusError") || response.containsKey("returnedDateError")) {
			return response;
		}

		final Map<Object, Object> existingOrder = calculateExistingOrderDetails(checkOutPaymentDetails);
		final CheckOutPaymentEntity checkOutPayment = (CheckOutPaymentEntity) existingOrder.get("previousPayment");
		try {
			// Start transaction
			transactionConfig.startTransaction();
			checkOutPaymentRepo.update(checkOutPayment);

			checkOutPayment.getCheckedOutBooks().stream().filter(Objects::nonNull).map(checkedOutBook -> {
				checkedOutBook.setOrderId(checkOutPayment.getOrderId());
				if (checkedOutBook.getReturnedDate() != null && checkedOutBook.getCheckedItatusId() == 3) {
					final BooksInventoryEntity invBook = booksInventoryRepo
							.findByBookInvId(checkedOutBook.getInventoryId());
					invBook.setAvailabilityId(1);
					invBook.setCreatedBy(checkOutPaymentDetails.getCreatedBy());
					invBook.setModifiedOn(new Timestamp(new Date().getTime()));
					booksInventoryRepo.update(invBook);
				}
				transactionConfig.commit();
				return booksCheckoutRepo.update(checkedOutBook);
			}).collect(Collectors.toList());
			response.put("orderDetails", checkOutPayment);
		} catch (DbException e) {
			transactionConfig.rollBack();
			throw new DbException(e.getMessage());
		}
		return response;
	}

	@Override
	public CheckedOutBookDTO getCheckedOutBook(final long checkedOutBookId) {
		LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.getCheckedOutBook()");
		final CheckedOutBookDTO checkedOutBook = booksCheckoutRepo.findByCheckedOutBookId(checkedOutBookId);
		if (checkedOutBook == null) {
			throw new RecordNotFoundException(validationMessages.getExceptionMessage(BOOK_NOT_FOUND));
		}
		LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.getCheckedOutBook()");
		return checkedOutBook;
	}

	@Override
	public List<CheckedOutBookDTO> getCheckedOutBooks() {
		LOGGER.debug("Start : com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.getCheckedOutBooks()");
		final List<CheckedOutBookDTO> checkedOutBooks = booksCheckoutRepo.findAll();
		LOGGER.debug("End : com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.getCheckedOutBooks()");
		return checkedOutBooks;

	}

	@Override
	public List<CheckedOutBookDTO> getCheckedOutBooks(final long userId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.getCheckedOutBooks()");
		final List<CheckedOutBookDTO> checkedOutBooks = booksCheckoutRepo.findAllByUserId(userId);
		LOGGER.debug("End : com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.getCheckedOutBooks()");
		return checkedOutBooks;
	}

	@Override
	public List<CheckedOutBookDTO> getCheckedOutBooksByStatus(final String statusId) {
		LOGGER.debug(
				"Start : com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.getCheckedOutBooksByStatus()");
		final List<CheckedOutBookDTO> checkedOutBooks = booksCheckoutRepo.findAllByStatus(statusId);
		LOGGER.debug("End : com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.getCheckedOutBooksByStatus()");
		return checkedOutBooks;
	}

	@Override
	public List<CheckedOutBookDTO> getUserCheckedOutBooksByStatus(long userId, String statusId) {
		LOGGER.debug(
				"Start : com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.getCheckedOutBooksByStatus()");
		final List<CheckedOutBookDTO> checkedOutBooks = booksCheckoutRepo.findAllByUserIdAndStatus(userId, statusId);
		LOGGER.debug("End : com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.getCheckedOutBooksByStatus()");
		return checkedOutBooks;
	}

	public CheckedOutBookEntity setCheckedOutBook(final CheckedOutBookDTO checkedOutBookDetails) {
		LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.setCheckedOutBook()");
		final CheckedOutBookEntity checkedOutBook = new CheckedOutBookEntity();
		checkedOutBook.setCheckoutId(checkedOutBookDetails.getCheckoutId());
		checkedOutBook.setBookId(checkedOutBookDetails.getBookId());
		checkedOutBook.setInventoryId(checkedOutBookDetails.getInventoryId());
		checkedOutBook.setUserId(checkedOutBookDetails.getUserId());
		checkedOutBook.setCheckedOutDate(checkedOutBookDetails.getCheckedOutDate());
		if (checkedOutBook.getCheckoutId() == 0) {
			checkedOutBook.setCheckedItatusId(DEFAULT_CHECKOUT_STATUS_ID);
		} else {
			checkedOutBook.setCheckedItatusId(checkedOutBookDetails.getCheckedItatusId());
		}
		checkedOutBook.setExpReturnDate(checkedOutBookDetails.getExpReturnDate());
		checkedOutBook.setBookConditionId(checkedOutBookDetails.getBookConditionId());
		checkedOutBook.setPenalty(checkedOutBookDetails.getPenalty());
		checkedOutBook.setNotes(checkedOutBookDetails.getNotes());
		checkedOutBook.setAmountPaid(checkedOutBookDetails.getAmountPaid());
		checkedOutBook.setReturnedDate(checkedOutBookDetails.getReturnedDate());
		checkedOutBook.setCreatedBy(checkedOutBookDetails.getCreatedBy());
		checkedOutBook.setModifiedOn(new Timestamp(new Date().getTime()));
		LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.setCheckedOutBook()");
		return checkedOutBook;
	}

	@Override
	public CheckedOutBookEntity calculateRentAmountOfBook(final CheckedOutBookDTO checkedOutBookDetails) {
		final BookEntity book = booksRepository.findByBookId(checkedOutBookDetails.getBookId());
		CheckedOutBookEntity checkedOutBook = null;
		if (book != null) {
			checkedOutBook = new CheckedOutBookEntity();
			long daysDiff;
			/// Calculate the amount based on exp return date or returned date
			if (checkedOutBookDetails.getReturnedDate() != null) {
				daysDiff = DateUtils.getDaysDiff(checkedOutBookDetails.getCheckedOutDate(),
						checkedOutBookDetails.getReturnedDate());
			} else {
				daysDiff = DateUtils.getDaysDiff(checkedOutBookDetails.getCheckedOutDate(),
						checkedOutBookDetails.getExpReturnDate());
			}
			LOGGER.debug("checked out date : " + checkedOutBookDetails.getCheckedOutDate());
			LOGGER.debug("Expected return date : " + checkedOutBookDetails.getExpReturnDate());
			LOGGER.debug("Returned date : " + checkedOutBookDetails.getReturnedDate());
			LOGGER.debug("Days difference : " + daysDiff);
			if (book.getRentPerDay() != null) {
				checkedOutBook
						.setTotalAmount(converter.getBigDecimalVal(Math.abs(daysDiff)).multiply(book.getRentPerDay()));
			}
			LOGGER.debug("Book Rental per day amount : " + book.getRentPerDay());
			LOGGER.debug("Book total amount : " + checkedOutBook.getTotalAmount());

			// Adding penalty to the total amount
			if (checkedOutBookDetails.getPenalty() != null) {
				// If penalty exists adding penalty when total amount not null
				if (checkedOutBook.getTotalAmount() != null) {
					checkedOutBook
							.setTotalAmount(checkedOutBook.getTotalAmount().add(checkedOutBookDetails.getPenalty()));
				} else {
					// If total amount is null
					checkedOutBook.setTotalAmount(checkedOutBookDetails.getPenalty());
				}
			}

		} else {

			throw new RecordNotFoundException("Book with id " + checkedOutBookDetails.getBookId() + " Not found");
		}
		return checkedOutBook;
	}

	@Override
	public Map<Object, Object> calculateNewOrderDetails(final CheckOutPaymentDTO checkOutPaymentDetails) {
		final Map<Object, Object> response = new HashMap<>();

		final CheckOutPaymentEntity newCheckOutPayment = new CheckOutPaymentEntity();
		if (checkOutPaymentDetails != null) {

			// setting advance paid
			newCheckOutPayment.setAdvancePaid(checkOutPaymentDetails.getAdvancePaid());
			newCheckOutPayment.setTotalAmountPaid(checkOutPaymentDetails.getAdvancePaid());

			newCheckOutPayment.setCheckedOutBooks(checkOutPaymentDetails.getCheckedOutBooksList().stream()
					.filter(Objects::nonNull).map(checkedOutBook -> {

						// To calculate only when book is not returned
						if (checkedOutBook.getReturnedDate() == null) {
							final CheckedOutBookEntity checkedOutBookData = this
									.calculateRentAmountOfBook(checkedOutBook);
							if (newCheckOutPayment.getTotalOrderAmount() != null) {
								newCheckOutPayment.setTotalOrderAmount(newCheckOutPayment.getTotalOrderAmount()
										.add(checkedOutBookData.getTotalAmount()));
							} else {
								newCheckOutPayment.setTotalOrderAmount(checkedOutBookData.getTotalAmount());
							}
							// to set the newly calculated total amount :: upto date
							checkedOutBook.setTotalAmount(checkedOutBookData.getTotalAmount());
						}
						checkedOutBook.setCreatedBy(checkOutPaymentDetails.getCreatedBy());
						CheckedOutBookEntity checkedOutBookModel = setCheckedOutBook(checkedOutBook);
						checkedOutBookModel.setTotalAmount(checkedOutBook.getTotalAmount());
						checkedOutBookModel.setCreatedOn(new Timestamp(new Date().getTime()));
						return checkedOutBookModel;
					}).collect(Collectors.toList()));

			// Calculate due amount substract : totalorderamount - totalamountpaid
			if (newCheckOutPayment.getTotalOrderAmount() != null) {
				if (newCheckOutPayment.getTotalAmountPaid() != null
						&& newCheckOutPayment.getTotalOrderAmount().compareTo(BigDecimal.ZERO) > 0) {
					newCheckOutPayment.setDueAmount(
							newCheckOutPayment.getTotalOrderAmount().subtract(newCheckOutPayment.getTotalAmountPaid()));
				} else {
					newCheckOutPayment.setDueAmount(newCheckOutPayment.getTotalOrderAmount());
				}
			}
			// Setting amount due flag ::
			// 1.true means due amount exists 2. false means no due amount , order amount
			// cleared
			if (newCheckOutPayment.getTotalAmountPaid() != null) {
				newCheckOutPayment.setAmountDueFlag(true);
				if (newCheckOutPayment.getTotalOrderAmount().compareTo(newCheckOutPayment.getTotalAmountPaid()) <= 0) {
					newCheckOutPayment.setAmountDueFlag(false);
				}
			} else {
				newCheckOutPayment.setAmountDueFlag(true);
			}
			newCheckOutPayment.setCreatedOn(new Timestamp(new Date().getTime()));
			newCheckOutPayment.setModifiedOn(new Timestamp(new Date().getTime()));
			newCheckOutPayment.setCreatedBy(checkOutPaymentDetails.getCreatedBy());

		}
		response.put("newOrderDetails", newCheckOutPayment);
		return response;
	}

	@Override
	public Map<Object, Object> calculateExistingOrderDetails(final CheckOutPaymentDTO checkOutPaymentDetails) {
		final Map<Object, Object> response = new HashMap<>();
		final CheckOutPaymentEntity previousPayment = checkOutPaymentRepo
				.findByPaymentId(checkOutPaymentDetails.getOrderId());
		if (previousPayment != null) {
			if (checkOutPaymentDetails.isAmountDueFlag()) {
				// Preparing books list with updated new amounts and statuses
				previousPayment.setCheckedOutBooks(checkOutPaymentDetails.getCheckedOutBooksList().stream()
						.filter(Objects::nonNull).map(checkedOutBook -> {

							// Without amount paying means ready to pick up ..Need to make books available
							// in books inventory as checked in
							// Ready to pick status by user
							// To calculate only when book is not returned
							if (checkedOutBook.getReturnedDate() == null) {
								final CheckedOutBookEntity checkedOutBookData = this
										.calculateRentAmountOfBook(checkedOutBook);

								if (previousPayment.getTotalOrderAmount() != null) {
									previousPayment.setTotalOrderAmount(previousPayment.getTotalOrderAmount()
											.add(checkedOutBookData.getTotalAmount()));
								} else {
									previousPayment.setTotalOrderAmount(checkedOutBookData.getTotalAmount());
								}
								// to set the newly calculated total amount :: upto date
								checkedOutBook.setTotalAmount(checkedOutBookData.getTotalAmount());
							}
							return setCheckedOutBook(checkedOutBook);
						}).collect(Collectors.toList()));

			} else {
				// get data from database .. NO changes as the order has been closed :::
				// --> previousPayment
			}

			// Adding new payment money to already paid total money
			if (checkOutPaymentDetails.getAmountPaid() == null) {
				if (previousPayment.getTotalAmountPaid() != null) {
					previousPayment.setTotalAmountPaid(
							previousPayment.getTotalAmountPaid().add(checkOutPaymentDetails.getAmountPaid()));
				} else {
					previousPayment.setTotalAmountPaid(checkOutPaymentDetails.getAmountPaid());
				}
			}

			// Calculate due amount substract : totalorderamount - totalamountpaid
			if (previousPayment.getTotalOrderAmount() != null) {
				if (previousPayment.getTotalAmountPaid() != null
						&& previousPayment.getTotalOrderAmount().compareTo(BigDecimal.ZERO) > 0) {
					previousPayment.setDueAmount(
							previousPayment.getTotalOrderAmount().subtract(previousPayment.getTotalAmountPaid()));
				} else {
					previousPayment.setDueAmount(previousPayment.getTotalOrderAmount());
				}
			}

			// Setting amount due flag ::
			// 1.true means due amount exists 2. false means no due amount , order amount
			// cleared
			if (previousPayment.getTotalOrderAmount().compareTo(previousPayment.getTotalAmountPaid()) <= 0) {
				previousPayment.setAmountDueFlag(false);
			} else {
				previousPayment.setAmountDueFlag(true);
			}
			previousPayment.setModifiedOn(new Timestamp(new Date().getTime()));
			previousPayment.setCreatedBy(checkOutPaymentDetails.getCreatedBy());
			response.put("previousPayment", previousPayment);
		}

		return response;
	}

	/// common method for both new and existing order
	@Override
	public CheckOutPaymentEntity calculateOrderDetails(CheckOutPaymentDTO checkOutPaymentDetails) {
		CheckOutPaymentEntity previousPayment = null;
		final CheckOutPaymentEntity checkOutPaymet = new CheckOutPaymentEntity();
		if (checkOutPaymentDetails != null) {
			checkOutPaymet.setOrderId(checkOutPaymentDetails.getOrderId());
			checkOutPaymet.setModifiedOn(new Timestamp(new Date().getTime()));
			checkOutPaymet.setCreatedBy(checkOutPaymentDetails.getCreatedBy());

			if (checkOutPaymentDetails.getOrderId() != 0) {
				previousPayment = checkOutPaymentRepo.findByPaymentId(checkOutPaymentDetails.getOrderId());
				if (previousPayment != null) {
					checkOutPaymet.setAdvancePaid(previousPayment.getAdvancePaid());
					checkOutPaymet.setTotalAmountPaid(previousPayment.getTotalAmountPaid());
					checkOutPaymet.setDueAmount(previousPayment.getDueAmount());
					checkOutPaymet.setCreatedOn(previousPayment.getCreatedOn());
					checkOutPaymet.setAmountDueFlag(previousPayment.isAmountDueFlag());
				}
				// To add the amount when returning the book , adding to the existing toal
				// amount
				// paid value
				if (checkOutPaymentDetails.getAmountPaid() != null && checkOutPaymet.getTotalAmountPaid() != null) {
					checkOutPaymet.setTotalAmountPaid(
							checkOutPaymet.getTotalAmountPaid().add(checkOutPaymentDetails.getAmountPaid()));
				} else if (checkOutPaymentDetails.getAmountPaid() != null
						&& checkOutPaymet.getTotalAmountPaid() == null) {
					checkOutPaymet.setTotalAmountPaid(checkOutPaymentDetails.getAmountPaid());
				}
			} else {
				checkOutPaymet.setAdvancePaid(checkOutPaymentDetails.getAdvancePaid());
				checkOutPaymet.setTotalAmountPaid(checkOutPaymentDetails.getAdvancePaid());
				checkOutPaymet.setAmountDueFlag(true);
				checkOutPaymet.setCreatedOn(new Timestamp(new Date().getTime()));
			}

			checkOutPaymet.setCheckedOutBooks(checkOutPaymentDetails.getCheckedOutBooksList().stream()
					.filter(Objects::nonNull).map(checkedOutBook -> {
						checkedOutBook.setCreatedBy(checkOutPaymentDetails.getCreatedBy());
						final CheckedOutBookEntity previousBookDetails = booksCheckoutRepo
								.findByCheckOutId(checkedOutBook.getCheckoutId());
						CheckedOutBookEntity checkedOutBookModel = null;
						if (previousBookDetails != null && previousBookDetails.getCheckedItatusId() == 2
								&& previousBookDetails.getReturnedDate() != null) { /// if the book is returned
							checkedOutBookModel = previousBookDetails;
							if (checkOutPaymentDetails.getTotalOrderAmount() != null) {
								checkOutPaymentDetails.setTotalOrderAmount(checkOutPaymentDetails.getTotalOrderAmount()
										.add(checkedOutBookModel.getTotalAmount()));
							} else {
								checkOutPaymentDetails.setTotalOrderAmount(checkedOutBookModel.getTotalAmount());
							}
							if (checkedOutBookModel.getPenalty() != null
									&& checkOutPaymentDetails.getTotalOrderAmount() != null) {
								checkOutPaymentDetails.setTotalOrderAmount(checkOutPaymentDetails.getTotalOrderAmount()
										.add(checkedOutBookModel.getPenalty()));
							} else {
								checkOutPaymentDetails.setTotalOrderAmount(checkedOutBookModel.getPenalty());
							}
						} else { // if the book is not returned
							checkedOutBookModel = setCheckedOutBook(checkedOutBook);
							if (checkOutPaymentDetails.getTotalOrderAmount() != null) {
								checkOutPaymentDetails.setTotalOrderAmount(checkOutPaymentDetails.getTotalOrderAmount()
										.add(checkedOutBookModel.getTotalAmount()));
							} else {
								checkOutPaymentDetails.setTotalOrderAmount(checkedOutBookModel.getTotalAmount());
							}
						}
						return checkedOutBookModel;
					}).collect(Collectors.toList()));

			checkOutPaymet.setTotalOrderAmount(checkOutPaymentDetails.getTotalOrderAmount());
			if (checkOutPaymet.getTotalAmountPaid() != null) {
				if (checkOutPaymentDetails.getTotalOrderAmount().compareTo(BigDecimal.ZERO) > 0) {
					checkOutPaymet.setDueAmount(
							checkOutPaymentDetails.getTotalOrderAmount().subtract(checkOutPaymet.getTotalAmountPaid()));
				}
				if (checkOutPaymet.getTotalOrderAmount().compareTo(checkOutPaymet.getTotalAmountPaid()) <= 0) {
					checkOutPaymet.setAmountDueFlag(false);
				}
			} else {
				checkOutPaymet.setDueAmount(checkOutPaymentDetails.getTotalOrderAmount());
			}

		}
		return checkOutPaymet;
	}

	@Override
	public Map<Object, Object> updateTheBookStatus(CheckedOutBookDTO checkOutBookDetails) {
		LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.updateTheBookStatus()");
		final Map<Object, Object> response = new HashMap<>();
		// Transaction transaction = transactionConfig.getBooksDb().startTransaction();
		try {
			// start transaction
			transactionConfig.startTransaction();

			final CheckOutPaymentEntity checkOutPayment = checkOutPaymentRepo
					.findByPaymentId(checkOutBookDetails.getOrderId());
			if (checkOutPayment != null) {
				if (checkOutBookDetails.getAmountPaid() != null) {
					if (checkOutPayment.getTotalAmountPaid() != null) {
						checkOutPayment.setTotalAmountPaid(
								checkOutPayment.getTotalAmountPaid().add(checkOutBookDetails.getAmountPaid()));
					} else {
						checkOutPayment.setTotalAmountPaid(checkOutBookDetails.getAmountPaid());
					}
					if (checkOutPayment.getTotalOrderAmount().compareTo(BigDecimal.ZERO) > 0) {
						checkOutPayment.setDueAmount(
								checkOutPayment.getTotalOrderAmount().subtract(checkOutPayment.getTotalAmountPaid()));
					}
					checkOutPayment.setAmountDueFlag(true);
					if (checkOutPayment.getTotalOrderAmount().compareTo(checkOutPayment.getTotalAmountPaid()) <= 0) {
						checkOutPayment.setAmountDueFlag(false);
					}
				}
				checkOutPayment.setModifiedOn(new Timestamp(new Date().getTime()));
				checkOutPayment.setCreatedBy(checkOutBookDetails.getCreatedBy());

				final CheckedOutBookEntity checkedOutBook = booksCheckoutRepo
						.findByCheckedOutId(checkOutBookDetails.getCheckoutId());
				checkedOutBook.setCheckedItatusId(checkOutBookDetails.getCheckedItatusId());
				checkedOutBook.setModifiedOn(new Timestamp(new Date().getTime()));
				checkedOutBook.setCreatedBy(checkOutBookDetails.getCreatedBy());
				if (checkedOutBook.getCheckedItatusId() == 3) {
					checkedOutBook.setReturnedDate(new Date());
					checkOutBookDetails.setReturnedDate(checkedOutBook.getReturnedDate());
					checkOutBookDetails.setCheckedOutDate(checkedOutBook.getCheckedOutDate());
					final CheckedOutBookEntity checkedOutBookData = this.calculateRentAmountOfBook(checkOutBookDetails);
					checkedOutBook.setTotalAmount(checkedOutBookData.getTotalAmount());
				}
				if (checkedOutBook.getCheckedItatusId() == 4) {
					final BooksInventoryEntity inventoryBook = booksInventoryRepo
							.findByBookInvId(checkedOutBook.getInventoryId());
					inventoryBook.setAvailabilityId(1);
					inventoryBook.setModifiedOn(new Timestamp(new Date().getTime()));
					inventoryBook.setCreatedBy(checkOutBookDetails.getCreatedBy());
					booksInventoryRepo.update(inventoryBook);
				}
				if (checkedOutBook.getAmountPaid() != null && checkOutBookDetails.getAmountPaid() != null) {
					checkedOutBook
							.setAmountPaid(checkedOutBook.getAmountPaid().add(checkOutBookDetails.getAmountPaid()));
				} else {
					checkedOutBook.setAmountPaid(checkOutBookDetails.getAmountPaid());
				}
				booksCheckoutRepo.update(checkedOutBook);
				checkOutPaymentRepo.update(checkOutPayment);
				transactionConfig.commit();
				response.put("checkedOutBook", checkedOutBook);
			}
		} catch (Exception e) {
			// Roll back
			transactionConfig.rollBack();
			LOGGER.error("Exception occured while processing the data ", e);
		}
		LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksCheckoutServiceImpl.updateTheBookStatus()");
		return response;
	}

}
