package com.omniwyse.booksapi.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "books_info")
public class BookEntity extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long bookId;
	private String title;
	private String author;
	private String publisher;
	private long genreId;
	private String isbnCode;
	private String edition;
	private Date year;
	private String bookCoverPage;
	private String samplePageUrl;
	private String imagesUrl1;
	private String imagesUrl2;
	private String bookCondition;
	private BigDecimal bookPrice;
	private String bookDescription;
	private long demand;
	private long numberOfPages;
	private long productGroup;
	private Date publicationDate;
	private BigDecimal rentPerDay;
	private BigDecimal rentPerWeek;
	private BigDecimal rentPerMonth;
	private long ownerId;
	private long stock;
	private BigDecimal baseRentalValue;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "book_id")
	public long getBookId() {
		return bookId;
	}

	@Column(name = "book_id")
	public void setBookId(long bookId) {
		this.bookId = bookId;
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

	@Column(name = "title")
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Column(name = "genre_id")
	public long getGenreId() {
		return genreId;
	}

	@Column(name = "genre_id")
	public void setGenreId(long genreId) {
		this.genreId = genreId;
	}

	@Column(name = "owner_id")
	public long getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(long ownerId) {
		this.ownerId = ownerId;
	}

	@Column(name = "isbn_code")
	public String getIsbnCode() {
		return isbnCode;
	}

	public void setIsbnCode(String isbnCode) {
		this.isbnCode = isbnCode;
	}

	@Column(name = "edition")
	public String getEdition() {
		return edition;
	}

	public void setEdition(String edition) {
		this.edition = edition;
	}

	@Column(name = "year")
	public Date getYear() {
		return year;
	}

	public void setYear(Date year) {
		this.year = year;
	}

	@Column(name = "book_cover_page")
	public String getBookCoverPage() {
		return bookCoverPage;
	}

	public void setBookCoverPage(String bookCoverPage) {
		this.bookCoverPage = bookCoverPage;
	}

	@Column(name = "sample_page_url")
	public String getSamplePageUrl() {
		return samplePageUrl;
	}

	public void setSamplePageUrl(String samplePageUrl) {
		this.samplePageUrl = samplePageUrl;
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

	@Column(name = "book_condition")
	public String getBookCondition() {
		return bookCondition;
	}

	public void setBookCondition(String bookCondition) {
		this.bookCondition = bookCondition;
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

	@Column(name = "demand")
	public long getDemand() {
		return demand;
	}

	public void setDemand(long demand) {
		this.demand = demand;
	}

	@Column(name = "number_of_pages")
	public long getNumberOfPages() {
		return numberOfPages;
	}

	public void setNumberOfPages(long numberOfPages) {
		this.numberOfPages = numberOfPages;
	}

	@Column(name = "product_group")
	public long getProductGroup() {
		return productGroup;
	}

	public void setProductGroup(long productGroup) {
		this.productGroup = productGroup;
	}

	@Column(name = "publication_date")
	public Date getPublicationDate() {
		return publicationDate;
	}

	public void setPublicationDate(Date publicationDate) {
		this.publicationDate = publicationDate;
	}

	@Column(name = "rent_per_day")
	public BigDecimal getRentPerDay() {
		return rentPerDay;
	}

	public void setRentPerDay(BigDecimal rentPerDay) {
		this.rentPerDay = rentPerDay;
	}

	@Column(name = "rent_per_week")
	public BigDecimal getRentPerWeek() {
		return rentPerWeek;
	}

	public void setRentPerWeek(BigDecimal rentPerWeek) {
		this.rentPerWeek = rentPerWeek;
	}

	@Column(name = "rent_per_month")
	public BigDecimal getRentPerMonth() {
		return rentPerMonth;
	}

	public void setRentPerMonth(BigDecimal rentPerMonth) {
		this.rentPerMonth = rentPerMonth;
	}

	@Column(name = "stock")
	public long getStock() {
		return stock;
	}

	public void setStock(long stock) {
		this.stock = stock;
	}

	@Column(name = "base_rental_value")
	public BigDecimal getBaseRentalValue() {
		return baseRentalValue;
	}

	public void setBaseRentalValue(BigDecimal baseRentalValue) {
		this.baseRentalValue = baseRentalValue;
	}

}
