package com.omniwyse.booksapi.exceptions;

public class PasswordDoesNotMatchException extends WiseReadsUncheckedException {
    public PasswordDoesNotMatchException(String message) {
        super(message);
    }
}
