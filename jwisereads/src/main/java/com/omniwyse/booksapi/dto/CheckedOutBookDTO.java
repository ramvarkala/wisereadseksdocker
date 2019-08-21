package com.omniwyse.booksapi.dto;

import static com.omniwyse.booksapi.commons.ValidationKeys.CAN_NOT_BE_EMPTY;
import static com.omniwyse.booksapi.commons.ValidationKeys.CAN_NOT_BE_NULL;
import static com.omniwyse.booksapi.commons.ValidationKeys.EXP_RETURN_DATE;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class CheckedOutBookDTO extends BaseDTO {

	private long checkoutId;
	private long orderId;
	private long bookId;
	private long inventoryId;
	private long userId;
	private Date checkedOutDate;
	private BigDecimal totalAmount;

	@NotNull(message = EXP_RETURN_DATE + CAN_NOT_BE_EMPTY)
	@NotEmpty(message = EXP_RETURN_DATE + CAN_NOT_BE_NULL)
	private Date expReturnDate;

	private long bookConditionId;
	private BigDecimal penalty;
	private String notes;
	private Date returnedDate;
	private long checkedItatusId;
	private String userEmail;
	private String checkedStatus;
	private BigDecimal amountPaid;
	private String title;
	private String userFirstName;
	private String userLastName;
	private String author;
	private String publisher;
	private String edition;
	private String bookCoverPage;
	private String bookDescription;
	private BigDecimal bookPrice;
	private BigDecimal advancePaid;
	private BigDecimal dueAmount;
	private BigDecimal rentPerDay;
	private String imagesUrl1;
	private String imagesUrl2;
	private boolean isOverDue;
	private long dueDays;
	private long contactNumber;

	@Column(name = "checkout_id")
	public long getCheckoutId() {
		return checkoutId;
	}

	public void setCheckoutId(long checkoutId) {
		this.checkoutId = checkoutId;
	}

	@Column(name = "book_id")
	public long getBookId() {
		return bookId;
	}

	public void setBookId(long bookId) {
		this.bookId = bookId;
	}

	@Column(name = "inventory_id")
	public long getInventoryId() {
		return inventoryId;
	}

	public void setInventoryId(long inventoryId) {
		this.inventoryId = inventoryId;
	}

	@Column(name = "user_id")
	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	@Column(name = "checked_out_date")
	public Date getCheckedOutDate() {
		return checkedOutDate;
	}

	public void setCheckedOutDate(Date checkedOutDate) {
		this.checkedOutDate = checkedOutDate;
	}

	@Column(name = "total_amount")
	public BigDecimal getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(BigDecimal totalAmount) {
		this.totalAmount = totalAmount;
	}

	@Column(name = "exp_return_date")
	public Date getExpReturnDate() {
		return expReturnDate;
	}

	public void setExpReturnDate(Date expReturnDate) {
		this.expReturnDate = expReturnDate;
	};

	@Column(name = "book_condition_id")
	public long getBookConditionId() {
		return bookConditionId;
	}

	public void setBookConditionId(long bookConditionId) {
		this.bookConditionId = bookConditionId;
	}

	@Column(name = "penalty")
	public BigDecimal getPenalty() {
		return penalty;
	}

	public void setPenalty(BigDecimal penalty) {
		this.penalty = penalty;
	}

	@Column(name = "notes")
	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	@Column(name = "returned_date")
	public Date getReturnedDate() {
		return returnedDate;
	}

	public void setReturnedDate(Date returnedDate) {
		this.returnedDate = returnedDate;
	}

	@Column(name = "checked_status_id")
	public long getCheckedItatusId() {
		return checkedItatusId;
	}

	public void setCheckedItatusId(long checkedItatusId) {
		this.checkedItatusId = checkedItatusId;
	}

	@Column(name = "order_id")
	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}

	@Column(name = "email")
	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	@Column(name = "checked_status")
	public String getCheckedStatus() {
		return checkedStatus;
	}

	public void setCheckedStatus(String checkedStatus) {
		this.checkedStatus = checkedStatus;
	}

	@Column(name = "amount_paid")
	public BigDecimal getAmountPaid() {
		return amountPaid;
	}

	public void setAmountPaid(BigDecimal amountPaid) {
		this.amountPaid = amountPaid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Column(name = "first_name")
	public String getUserFirstName() {
		return userFirstName;
	}

	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
	}

	@Column(name = "last_name")
	public String getUserLastName() {
		return userLastName;
	}

	public void setUserLastName(String userLastName) {
		this.userLastName = userLastName;
	}

	@Column(name = "author")
	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	@Column(name = "publisher")
	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	@Column(name = "edition")
	public String getEdition() {
		return edition;
	}

	public void setEdition(String edition) {
		this.edition = edition;
	}

	@Column(name = "book_cover_page")
	public String getBookCoverPage() {
		return bookCoverPage;
	}

	public void setBookCoverPage(String bookCoverPage) {
		this.bookCoverPage = bookCoverPage;
	}

	@Column(name = "book_price")
	public BigDecimal getBookPrice() {
		return bookPrice;
	}

	public void setBookPrice(BigDecimal bookPrice) {
		this.bookPrice = bookPrice;
	}

	@Column(name = "book_description")
	public String getBookDescription() {
		return bookDescription;
	}

	public void setBookDescription(String bookDescription) {
		this.bookDescription = bookDescription;
	}

	@Column(name = "advance_paid")
	public BigDecimal getAdvancePaid() {
		return advancePaid;
	}

	public void setAdvancePaid(BigDecimal advancePaid) {
		this.advancePaid = advancePaid;
	}

	@Column(name = "due_amount")
	public BigDecimal getDueAmount() {
		return dueAmount;
	}

	public void setDueAmount(BigDecimal dueAmount) {
		this.dueAmount = dueAmount;
	}

	@Column(name = "rent_per_day")
	public BigDecimal getRentPerDay() {
		return rentPerDay;
	}

	public void setRentPerDay(BigDecimal rentPerDay) {
		this.rentPerDay = rentPerDay;
	}

	@Column(name = "images_url1")
	public String getImagesUrl1() {
		return imagesUrl1;
	}

	public void setImagesUrl1(String imagesUrl1) {
		this.imagesUrl1 = imagesUrl1;
	}

	@Column(name = "images_url2")
	public String getImagesUrl2() {
		return imagesUrl2;
	}

	public void setImagesUrl2(String imagesUrl2) {
		this.imagesUrl2 = imagesUrl2;
	}

	public boolean isOverDue() {
		return isOverDue;
	}

	public void setOverDue(boolean overDue) {
		isOverDue = overDue;
	}

	public long getDueDays() {
		return dueDays;
	}

	public void setDueDays(long dueDays) {
		this.dueDays = dueDays;
	}

	@Column(name = "contact_number")
	public long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}
}
