package com.omniwyse.booksapi.dto;

import javax.persistence.Column;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Date;

import static com.omniwyse.booksapi.commons.ValidationKeys.*;

public class BookDTO extends BaseDTO {

    private long bookId;
    @NotNull(message = "title can't be empty")
    @NotEmpty(message = "title can;t be null")
    private String title;
    @NotNull(message = BOOK_AUTHOR + CAN_NOT_BE_EMPTY)
    @NotEmpty(message = BOOK_AUTHOR + CAN_NOT_BE_NULL)
    private String author;
    @NotNull(message = BOOK_PUBLISHER + CAN_NOT_BE_EMPTY)
    @NotEmpty(message = BOOK_PUBLISHER + CAN_NOT_BE_NULL)
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
    private String genre;
    private String owner;
    private long inventoryId;
    private long availabilityId;
    private String influencerName;
    private String availability;
    private String ownerFirstName;
    private String ownerLastName;
    private long ownerContactNumber;

    @Column(name = "inventory_id")
    public long getInventoryId() {
        return inventoryId;
    }

    public void setInventoryId(long inventoryId) {
        this.inventoryId = inventoryId;
    }

    @Column(name = "availability_id")
    public long getAvailabilityId() {
        return availabilityId;
    }

    public void setAvailabilityId(long availabilityId) {
        this.availabilityId = availabilityId;
    }

    @Column(name = "influencer_name")
    public String getInfluencerName() {
        return influencerName;
    }

    public void setInfluencerName(String influencerName) {
        this.influencerName = influencerName;
    }

    @Column(name = "availability")
    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    @Column(name = "owner_email")
    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

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

    @Column(name = "owner_first_name")
    public String getOwnerFirstName() {
        return ownerFirstName;
    }

    public void setOwnerFirstName(String ownerFirstName) {
        this.ownerFirstName = ownerFirstName;
    }

    @Column(name = "owner_last_name")
    public String getOwnerLastName() {
        return ownerLastName;
    }

    public void setOwnerLastName(String ownerLastName) {
        this.ownerLastName = ownerLastName;
    }

    @Column(name = "owner_contact_number")
    public long getOwnerContactNumber() {
        return ownerContactNumber;
    }

    public void setOwnerContactNumber(long ownerContactNumber) {
        this.ownerContactNumber = ownerContactNumber;
    }
}
