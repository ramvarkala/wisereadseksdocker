package com.omniwyse.booksapi.dto;

import java.math.BigDecimal;
import java.util.List;

public class UserBooksDTO {
    private long userId;
    private List<CheckedOutBookDTO> books;
    private String email;
    private String userFullName;
    private BigDecimal amountPaid;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public List<CheckedOutBookDTO> getBooks() {
        return books;
    }

    public void setBooks(List<CheckedOutBookDTO> books) {
        this.books = books;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserFullName() {
        return userFullName;
    }

    public void setUserFullName(String userFullName) {
        this.userFullName = userFullName;
    }

	public BigDecimal getAmountPaid() {
		return amountPaid;
	}

	public void setAmountPaid(BigDecimal amountPaid) {
		this.amountPaid = amountPaid;
	}
}
