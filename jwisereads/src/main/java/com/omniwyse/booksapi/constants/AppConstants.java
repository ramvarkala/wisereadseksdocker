package com.omniwyse.booksapi.constants;

public class AppConstants {
	
	//Start: Response constants
	
	public static final String CREATE_SUCCESSFUL = "created successfully";
    public static final String CREATE_FAILED = "creation failed";
    public static final String DELETE_FAILED = "deletion failed";
    public static final String DELETE_SUCCESSFUL = "deleted successfully";
    public static final String UPDATE_FAILED = "updation failed";
    public static final String UPDATE_SUCCESSFUL = "updated successfully";
    public static final String UPLOAD_SUCESSFUL = "upload sucessfull";
    public static final String UPLOAD_FAILED = "upload failed";
    public static final String FOUND_SUCCESSFUL ="object found successfully";
    public static final String FOUND_FAILED ="object found failed";
    public static final String PROCESS_SUCCESSFUL = "Processed successfully";
    public static final String PROCESS_FAILED = "Processing failed";
    public static final String SYSTEM ="System";
    public static final String VALIDATION_FAILED ="validationFailed";
    
    
    //End : Response constants
	
	public static final String BOOKS_DB_SCHEMA = "qabooksapi";
	public static final long DEFAULT_BOOK_AVAILABILITY = 1;
	public static final long DEFAULT_CHECKOUT_STATUS_ID = 1;
	public static final long RETURNED_CHECKOUT_STATUS_ID = 2;
	public static final int USER_ACTIVE_ID =1;
    public static final int USER_ROLE_ACTIVE_ID =1;
	public static final int MAX_CHECKOUT_BOOKS_PARAM_ID =1;
	public static final String MAX_CHECKOUT_BOOKS_PARAM_NAME ="max_checkout_books";
	public static final String DEFAULT_EXCP_MSG ="Exception occured while processing the data ";
	

}
