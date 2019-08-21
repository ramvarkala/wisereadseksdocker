package com.omniwyse.booksapi.utils;

import java.math.BigDecimal;
import java.util.List;

public class EmailData {

    private List<String> mailRecipients;
    private String mailSender;
    private String subject;
    private String text;
    private int numOfDays;
    private BigDecimal dueAmount;
    private String bookTitle;
    private long orderId;
    private BigDecimal totalAmount;


    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getNumOfDays() {
        return numOfDays;
    }

    public void setNumOfDays(int numOfDays) {
        this.numOfDays = numOfDays;
    }

    public BigDecimal getDueAmount() {
        return dueAmount;
    }

    public void setDueAmount(BigDecimal dueAmount) {
        this.dueAmount = dueAmount;
    }

    public String getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

    public List<String> getMailRecipients() {
        return mailRecipients;
    }

    public void setMailRecipients(List<String> mailRecipients) {
        this.mailRecipients = mailRecipients;
    }
}
