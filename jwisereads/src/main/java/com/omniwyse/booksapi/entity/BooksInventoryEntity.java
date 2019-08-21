package com.omniwyse.booksapi.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Table(name="books_inventory")
public class BooksInventoryEntity extends BaseEntity {

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

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
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

}
