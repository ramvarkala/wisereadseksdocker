package com.omniwyse.booksapi.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class BooksCheckInResouce {
/*

	private static final Logger LOGGER = LoggerFactory.getLogger(BooksResource.class);

	@Autowired
	private BooksService booksService;

	@Autowired
	private JsonResponse<Book> jsonResponse;

	@Autowired
	private ValidationMessages validationMessages;

	@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
	@PostMapping("/books")
	public ResponseEntity<?> saveBook(@RequestBody BookDTO bookDetails) {
		LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksController.saveBook()");
		Book book = null;
		try {
			book = booksService.saveBook(bookDetails);
			
			LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksController.saveBook()");
			return jsonResponse.prepareResult(true, AppConstants.CREATE_SUCCESSFUL, null, book, HttpStatus.OK);
		} catch (Exception e) {
			LOGGER.error("Exception occured while saving book details : ", e);
			return jsonResponse.prepareResult(false, validationMessages.getMessage(EXCEPTION_OCCURED), null, book,
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
	@PutMapping("/books/{bookId}")
	public ResponseEntity<?> updateBook(@PathVariable long bookId, @RequestBody BookDTO bookDetails) {
		LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksController.updateBook()");
		Book book = null;
		try {
			book = booksService.updateBook(bookId, bookDetails);
			
			LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksController.updateBook()");
			return jsonResponse.prepareResult(true, AppConstants.UPDATE_SUCCESSFUL, null, book, HttpStatus.OK);
		} catch (ItemNotFoundException e) {
			LOGGER.error("Exception occured while fetching book details : ", e);
			return jsonResponse.prepareResult(false, e.getMessage(), null, book, HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			LOGGER.error("Exception occured while saving book details : ", e);
			return jsonResponse.prepareResult(false, validationMessages.getMessage(EXCEPTION_OCCURED), null, book,
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
	@GetMapping("/books/{bookId}")
	public ResponseEntity<?> getBook(@PathVariable long bookId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksController.getBook()");
		Book book = null;
		try {
			book = booksService.getBook(bookId);
			
			LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksController.getBook()");
			return jsonResponse.prepareResult(true, AppConstants.FOUND_SUCCESSFUL, null, book, HttpStatus.OK);
		} catch (ItemNotFoundException e) {
			LOGGER.error("Exception occured while fetching book details : ", e);
			return jsonResponse.prepareResult(false, e.getMessage(), null, book, HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			LOGGER.error("Exception occured while fetching book details : ", e);
			return jsonResponse.prepareResult(false, validationMessages.getMessage(EXCEPTION_OCCURED), null, book,
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
	@GetMapping("/books")
	public ResponseEntity<?> getBooks() {
		LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksController.getBooks()");
		List<Book> books = null;
		try {
			books = booksService.getBooks();
			
			LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksController.getBooks()");
			return jsonResponse.prepareResults(true, AppConstants.FOUND_SUCCESSFUL, null, books, HttpStatus.OK);
		} catch (Exception e) {
			LOGGER.error("Exception occured while fetching books : ", e);
			return jsonResponse.prepareResults(false, validationMessages.getMessage(EXCEPTION_OCCURED), null, books,
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
*/


}
