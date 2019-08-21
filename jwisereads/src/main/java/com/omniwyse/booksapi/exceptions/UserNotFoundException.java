package com.omniwyse.booksapi.exceptions;

public class UserNotFoundException extends WiseReadsUncheckedException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UserNotFoundException(String message) {
		super(message);
	}
	
}
