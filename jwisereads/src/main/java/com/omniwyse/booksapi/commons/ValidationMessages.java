package com.omniwyse.booksapi.commons;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl;

@Component
public class ValidationMessages {

	private static final Logger LOGGER = LoggerFactory.getLogger(BooksSerivceImpl.class);

	private static Properties validationProperties = new Properties();
	private static Properties exceptionProperties = new Properties();

	private static String FILE_PATH = "/home/ubuntu/wisereadsdevapi/propertyfiles/";
	//private static String FILE_PATH = "/home/ubuntu/wisereadsapi/propertyfiles/";
	//private static String FILE_PATH = "C:\\Users\\haris\\Desktop\\";

	 private static final String VALIDATION_MSGS_FILE_PATH =FILE_PATH+"validation_messages.properties";
	 private static final String EXCEPTIONS_MSGS_FILE_PATH =FILE_PATH+"exception_messages.properties";


	public ValidationMessages() {
		try {
			File file = new File(VALIDATION_MSGS_FILE_PATH);
			InputStream inputStream = new FileInputStream(file);
			validationProperties.load(inputStream);
		} catch (IOException e) {
			LOGGER.error("validations Propery file not found ..");
		}

		try {
			File file = new File(EXCEPTIONS_MSGS_FILE_PATH);
			InputStream inputStream = new FileInputStream(file);
			exceptionProperties.load(inputStream);
		} catch (IOException e) {
			LOGGER.error("validations Propery file not found ..");
		}
	}

	public String getValidationMessage(String propKey) {
		return validationProperties.getProperty(propKey, "Property key is not found");
	}

	public String getExceptionMessage(String propKey) {
		return exceptionProperties.getProperty(propKey, "Property key is not found");
	}

}
