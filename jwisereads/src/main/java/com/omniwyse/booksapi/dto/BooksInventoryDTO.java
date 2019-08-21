package com.omniwyse.booksapi.dto;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;

public class BooksInventoryDTO extends BaseDTO {

	private long inventoryId;
	private long bookId;
	private long ownerId;
	private long availabilityId;
	private Date availableDate;
	private boolean buyFlag;
	private boolean rentFlag;
	private String whereIsTheBook;
	private long recommendedBy;
	private String locationId;
	private String title;
	private String influencerName;
	private String availability;
	private BigDecimal rentPerDay;
	private BigDecimal bookPrice;

	@Column(name = "inventory_id")
	public long getInventoryId() {
		return inventoryId;
	}

	public void setInventoryId(long inventoryId) {
		this.inventoryId = inventoryId;
	}

	@Column(name = "book_id")
	public long getBookId() {
		return bookId;
	}

	public void setBookId(long bookId) {
		this.bookId = bookId;
	}

	@Column(name = "owner_id")
	public long getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(long ownerId) {
		this.ownerId = ownerId;
	}

	@Column(name = "availability_id")
	public long getAvailabilityId() {
		return availabilityId;
	}

	public void setAvailabilityId(long availabilityId) {
		this.availabilityId = availabilityId;
	}

	@Column(name = "available_Date")
	public Date getAvailableDate() {
		return availableDate;
	}

	public void setAvailableDate(Date availableDate) {
		this.availableDate = availableDate;
	}

	@Column(name = "buy_flag")
	public boolean getBuyFlag() {
		return buyFlag;
	}

	public void setBuyFlag(boolean buyFlag) {
		this.buyFlag = buyFlag;
	}

	@Column(name = "rent_flag")
	public boolean getRentFlag() {
		return rentFlag;
	}

	public void setRentFlag(boolean rentFlag) {
		this.rentFlag = rentFlag;
	}

	@Column(name = "where_is_the_book")
	public String getWhereIsTheBook() {
		return whereIsTheBook;
	}

	public void setWhereIsTheBook(String whereIsTheBook) {
		this.whereIsTheBook = whereIsTheBook;
	}

	@Column(name = "recommended_by")
	public long getRecommendedBy() {
		return recommendedBy;
	}

	public void setRecommendedBy(long recommendedBy) {
		this.recommendedBy = recommendedBy;
	}

	@Column(name = "location_id")
	public String getLocationId() {
		return locationId;
	}

	public void setLocationId(String locationId) {
		this.locationId = locationId;
	}

	@Column(name = "rent_per_day")
	public BigDecimal getRentPerDay() {
		return rentPerDay;
	}

	public void setRentPerDay(BigDecimal rentPerDay) {
		this.rentPerDay = rentPerDay;
	}

	@Column(name = "book_price")
	public BigDecimal getBookPrice() {
		return bookPrice;
	}

	public void setBookPrice(BigDecimal bookPrice) {
		this.bookPrice = bookPrice;
	}

	public String getAvailability() {
		return availability;
	}

	public void setAvailability(String availability) {
		this.availability = availability;
	}

	@Column(name = "influencer_name")
	public String getInfluencerName() {
		return influencerName;
	}

	public void setInfluencerName(String influencerName) {
		this.influencerName = influencerName;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

}
