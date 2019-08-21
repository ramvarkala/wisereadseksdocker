package com.omniwyse.booksapi.exceptions;

public class ConstraintViolationException extends WiseReadsUncheckedException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ConstraintViolationException(String message) {
		super(message);
	}

}
