package com.omniwyse.booksapi.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Table(name = "books_checkout_details")
public class CheckedOutBookEntity extends BaseEntity {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    private long checkoutId;
    private long orderId;
    private long bookId;
    private long inventoryId;
    private long userId;
    private Date checkedOutDate;
    private BigDecimal totalAmount;
    private Date expReturnDate;
    private long bookConditionId;
    private BigDecimal penalty;
    private String notes;
    private Date returnedDate;
    private long checkedItatusId;
    private BigDecimal amountPaid;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    }

    ;

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

    @Column(name = "amount_paid")
    public BigDecimal getAmountPaid() {
        return amountPaid;
    }

    public void setAmountPaid(BigDecimal amountPaid) {
        this.amountPaid = amountPaid;
    }
}
