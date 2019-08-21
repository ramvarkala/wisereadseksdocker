package com.omniwyse.booksapi.utils;

import com.omniwyse.booksapi.exceptions.*;
import com.omniwyse.booksapi.resource.CommonResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ServiceExceptionHandler extends ResponseEntityExceptionHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(CommonResource.class);
    private static final String EXCEPTION_MSG = "Exception occurred";

    @ExceptionHandler(EmailAlreadyRegisteredException.class)
    public final ResponseEntity<?> handleEmailAlreadyExists(EmailAlreadyRegisteredException exception, WebRequest request) {
        printLogger(exception);
        Map<Object, Object> errors = new HashMap<>();
        Map<Object, Object> error = new HashMap<>();
        error.put("emailAlreadyExists", exception.getMessage());
        errors.put("email", error);
        return response(errors, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public final ResponseEntity<?> handleUserNotFound(UserNotFoundException exception, WebRequest request) {
        printLogger(exception);
        Map<Object, Object> errors = new HashMap<>();
        Map<Object, Object> error = new HashMap<>();
        error.put("userNotFound", exception.getMessage());
        errors.put("user", error);
        return response(errors, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(PasswordDoesNotMatchException.class)
    public final ResponseEntity<?> handlePasswordDoesNotMatch(PasswordDoesNotMatchException exception, WebRequest request) {
        printLogger(exception);
        Map<Object, Object> errors = new HashMap<>();
        Map<Object, Object> error = new HashMap<>();
        error.put("passwordMatch", exception.getMessage());
        errors.put("password", error);
        return response(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MaxCheckOutBooksException.class)
    public final ResponseEntity<?> handleMaxCheckOutBooks(MaxCheckOutBooksException exception, WebRequest request) {
        printLogger(exception);
        Map<Object, Object> errors = new HashMap<>();
        Map<Object, Object> error = new HashMap<>();
        error.put("maxBooksCheckOut", exception.getMessage());
        errors.put("books", error);
        return response(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(BookAlreadyCheckedOutException.class)
    public final ResponseEntity<?> handleBookAlreadyCheckedOut(BookAlreadyCheckedOutException exception, WebRequest request) {
        printLogger(exception);
        Map<Object, Object> errors = new HashMap<>();
        Map<Object, Object> error = new HashMap<>();
        error.put("outOfStock", exception.getMessage());
        error.put("bookTitle", exception.getTitle());
        error.put("inventoryId", exception.getInventoryId());
        errors.put("book", error);
        return response(errors, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(EmptyExpectedReturnedDateException.class)
    public final ResponseEntity<?> handleEmptyExpectedReturnedDate(EmptyExpectedReturnedDateException exception, WebRequest request) {
        printLogger(exception);
        Map<Object, Object> errors = new HashMap<>();
        Map<Object, Object> error = new HashMap<>();
        error.put("emptyDueDate", exception.getMessage());
        error.put("bookTitle", exception.getTitle());
        error.put("bookInventoryId", exception.getInventoryId());
        errors.put("book", error);
        return response(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(EmptyRolesException.class)
    public final ResponseEntity<?> handleEmptyRolesException(EmptyRolesException exception, WebRequest request) {
        printLogger(exception);
        Map<Object, Object> errors = new HashMap<>();
        Map<Object, Object> error = new HashMap<>();
        error.put("emptyRoles", exception.getMessage());
        errors.put("roles", error);
        return response(errors, HttpStatus.BAD_REQUEST);
    }

    private void printLogger(Exception exception) {
        LOGGER.debug(EXCEPTION_MSG, exception);
    }

    private ResponseEntity<Object> response(Map<Object, Object> errors, HttpStatus httpStatus) {
        return new ResponseEntity<>(new JSONResultEntity<>(false, null, null, errors), httpStatus);
    }
}
