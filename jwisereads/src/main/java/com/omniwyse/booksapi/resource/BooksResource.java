package com.omniwyse.booksapi.resource;

import static com.omniwyse.booksapi.commons.ExceptionMessagesKeys.EXCEPTION_OCCURED;
import static com.omniwyse.booksapi.constants.AppConstants.VALIDATION_FAILED;

import java.util.Map;

import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.omniwyse.booksapi.commons.ValidationMessages;
import com.omniwyse.booksapi.constants.AppConstants;
import com.omniwyse.booksapi.dto.BookDTO;
import com.omniwyse.booksapi.services.BooksService;
import com.omniwyse.booksapi.utils.JSONResultEntity;

@RestController
@RequestMapping("/api")
public class BooksResource {

	private static final Logger LOGGER = LoggerFactory.getLogger(BooksResource.class);

	private BooksService booksService;
	private ValidationMessages validationMessages;

	@Autowired
	public BooksResource(BooksService booksService, ValidationMessages validationMessages) {
		this.booksService = booksService;
		this.validationMessages = validationMessages;
	}

	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
	@PostMapping("/books")
	public ResponseEntity<?> saveBook(@RequestBody final BookDTO bookDetails) {
		LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksController.saveBook()");
		Map<Object, Object> response = booksService.saveBook(bookDetails);
		if (response.containsKey(VALIDATION_FAILED)) {
			return new ResponseEntity<>(new JSONResultEntity<>(false, AppConstants.CREATE_FAILED, null, response),
					HttpStatus.BAD_REQUEST);
		}
		LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksController.saveBook()");
		return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.CREATE_SUCCESSFUL, response),
				HttpStatus.OK);

	}

	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
	@PutMapping("/books/{bookId}")
	public ResponseEntity<?> updateBook(@PathVariable final long bookId, @RequestBody final BookDTO bookDetails) {
		LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksController.updateBook()");
		Map<Object, Object> response = booksService.updateBook(bookId, bookDetails);
		if (response.containsKey(VALIDATION_FAILED)) {
			return new ResponseEntity<>(new JSONResultEntity<>(false, AppConstants.UPDATE_FAILED, null, response),
					HttpStatus.BAD_REQUEST);
		}
		LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksController.updateBook()");
		return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.UPDATE_SUCCESSFUL, response),
				HttpStatus.OK);

	}

	// @PreAuthorize("isAuthenticated()")
	@GetMapping("/books/{bookId}")
	public ResponseEntity<?> getBook(@PathVariable final long bookId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksController.getBook()");
		Map<Object, Object> response = booksService.getBookDetailsById(bookId);
		LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksController.getBook()");
		return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, response),
				HttpStatus.OK);
	}

	// @PreAuthorize("isAuthenticated()")
	@GetMapping("/books")
	public ResponseEntity<?> getBooks() {
		LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksController.getBooks()");
		Map<Object, Object> response = booksService.getBooks();
		LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksController.getBooks()");
		return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, response),
				HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
	@PostMapping(value = "/books/upload-books-file", consumes = { "multipart/form-data" })
	public ResponseEntity<?> uploadBooksFile(@RequestPart("file") @NotNull MultipartFile file) {
		Map<Object, Object> responseData = null;
		LOGGER.debug("Start: com.omniwyse.booksapi.resources.BooksResource.uploadBooksFile() ");
		try {
			responseData = booksService.uploadBooksFile(file);
			LOGGER.debug("End: com.omniwyse.booksapi.resources.BooksResource.uploadBooksFile() ");
			return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.UPLOAD_SUCESSFUL, responseData),
					HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(new JSONResultEntity<>(false,
					validationMessages.getExceptionMessage(EXCEPTION_OCCURED), responseData),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// @PreAuthorize("isAuthenticated()")
	@GetMapping("/books/search/{title}")
	public ResponseEntity<?> searchBooks(@PathVariable final String title) {
		LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksController.searchBooks()");
		Map<Object, Object> response = booksService.searchBooks(title);
		LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksController.searchBooks()");
		return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, response),
				HttpStatus.OK);
	}

}
