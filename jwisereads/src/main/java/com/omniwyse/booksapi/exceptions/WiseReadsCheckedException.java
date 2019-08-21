package com.omniwyse.booksapi.exceptions;

public class WiseReadsCheckedException extends Exception {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public WiseReadsCheckedException(String message) {
		super(message);
	}

	public WiseReadsCheckedException(String message, Throwable t) {
		super(message, t);
	}

}
