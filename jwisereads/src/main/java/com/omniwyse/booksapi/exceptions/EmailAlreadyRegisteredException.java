package com.omniwyse.booksapi.exceptions;

public class EmailAlreadyRegisteredException extends WiseReadsUncheckedException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public EmailAlreadyRegisteredException(String message) {
		super(message);
	}

}
