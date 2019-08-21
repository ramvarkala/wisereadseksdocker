package com.omniwyse.booksapi.utils;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.exceptions.ConstraintViolationException;
import com.omniwyse.booksapi.exceptions.RecordNotFoundException;
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
public class DbExceptionHandler extends ResponseEntityExceptionHandler {
    private static final Logger LOGGER = LoggerFactory.getLogger(CommonResource.class);

    @ExceptionHandler(RecordNotFoundException.class)
    public final ResponseEntity<?> handleRecordNotFoundException(RecordNotFoundException exception, WebRequest request) {
        LOGGER.debug("Exception occurred : ", exception);
        Map<Object, Object> errors = new HashMap<>();
        Map<Object, Object> error = new HashMap<>();
        error.put("msg", exception.getMessage());
        errors.put("notFound", error);
        return response(errors, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public final ResponseEntity<?> handleConstraintViolationException(ConstraintViolationException exception, WebRequest request) {
        LOGGER.debug("Exception occurred : ", exception);
        Map<Object, Object> errors = new HashMap<>();
        Map<Object, Object> error = new HashMap<>();
        error.put("msg", exception.getMessage());
        errors.put("duplicate", error);
        return response(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(DbException.class)
    public final ResponseEntity<?> handleDbException(DbException exception, WebRequest request) {
        LOGGER.debug("Exception occurred : ", exception);
        Map<Object, Object> errors = new HashMap<>();
        Map<Object, Object> error = new HashMap<>();
        error.put("msg", exception.getMessage());
        errors.put("processError", error);
        return response(errors, HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<Object> response(Map<Object, Object> errors, HttpStatus httpStatus) {
        return new ResponseEntity<>(new JSONResultEntity<>(false, null, null, errors), httpStatus);
    }
}
