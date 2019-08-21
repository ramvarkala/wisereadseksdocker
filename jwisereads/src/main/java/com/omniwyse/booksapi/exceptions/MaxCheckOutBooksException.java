package com.omniwyse.booksapi.exceptions;

public class MaxCheckOutBooksException extends WiseReadsUncheckedException{
    public MaxCheckOutBooksException(String message) {
        super(message);
    }
}
