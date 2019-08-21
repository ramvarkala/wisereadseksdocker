package com.omniwyse.booksapi.resource;

import com.omniwyse.booksapi.constants.AppConstants;
import com.omniwyse.booksapi.dto.CheckOutPaymentDTO;
import com.omniwyse.booksapi.dto.CheckedOutBookDTO;
import com.omniwyse.booksapi.services.BooksCheckoutService;
import com.omniwyse.booksapi.utils.JSONResultEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class BooksCheckoutResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(BooksCheckoutResource.class);

    private BooksCheckoutService booksCheckoutService;

    @Autowired
    public BooksCheckoutResource(BooksCheckoutService booksCheckoutService) {
        this.booksCheckoutService = booksCheckoutService;
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_SUPER_ADMIN')")
    @PostMapping("/checked-out-books/order-details")
    public ResponseEntity<?> saveCheckedOutBook(@RequestBody final CheckOutPaymentDTO checkOutPaymentDetails) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksCheckoutResource.saveCheckedOutBooks()");
        Map<Object, Object> response = booksCheckoutService.saveCheckedOutBooks(checkOutPaymentDetails);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksCheckoutResource.saveCheckedOutBooks()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.CREATE_SUCCESSFUL, response), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_SUPER_ADMIN')")
    @PutMapping("/checked-out-books/order-details/{orderId}")
    public ResponseEntity<?> updateCheckedOutBooks(@PathVariable final long orderId,
                                                   @RequestBody final CheckOutPaymentDTO checkOutPaymentDetails) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksCheckoutResource.updateCheckedOutBooks()");
        Map<Object, Object> responseData = booksCheckoutService.updateCheckedOutBook(orderId, checkOutPaymentDetails);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksCheckoutResource.updateCheckedOutBooks()");
        if (responseData.containsKey("statusError") || responseData.containsKey("returnedDateError")
                || responseData.containsKey("paymentError")) {
            return new ResponseEntity<>(new JSONResultEntity<>(false, AppConstants.UPDATE_FAILED, null, responseData), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.UPDATE_SUCCESSFUL, responseData), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_SUPER_ADMIN')")
    @GetMapping("/checked-out-books/{checkedOutBookId}")
    public ResponseEntity<?> getCheckedOutBook(@PathVariable final long checkedOutBookId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksCheckoutResource.getCheckedOutBook()");
        CheckedOutBookDTO checkedOutBook = booksCheckoutService.getCheckedOutBook(checkedOutBookId);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksCheckoutResource.getCheckedOutBook()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, checkedOutBook), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_SUPER_ADMIN')")
    @GetMapping("/checked-out-books")
    public ResponseEntity<?> getCheckedOutBooks() {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksCheckoutResource.getCheckedOutBooks()");
        List<CheckedOutBookDTO> checkedOutBooks = booksCheckoutService.getCheckedOutBooks();
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksCheckoutResource.getCheckedOutBooks()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, checkedOutBooks), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_SUPER_ADMIN')")
    @GetMapping("/checked-out-books/user/{userId}")
    public ResponseEntity<?> getCheckedOutBooks(@PathVariable final long userId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksCheckoutResource.getCheckedOutBooks()");
        List<CheckedOutBookDTO> checkedOutBooks = booksCheckoutService.getCheckedOutBooks(userId);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksCheckoutResource.getCheckedOutBooks()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, checkedOutBooks), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_SUPER_ADMIN')")
    @PostMapping("/checked-out-books/calculate-new-order-details")
    public ResponseEntity<?> calculateNewOrderDetails(@RequestBody CheckOutPaymentDTO checkOutPaymentDetails) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksCheckoutResource.calculateOrderDetails()");
        Map<Object, Object> response = booksCheckoutService.calculateNewOrderDetails(checkOutPaymentDetails);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksCheckoutResource.calculateOrderDetails()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.PROCESS_SUCCESSFUL, response), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_SUPER_ADMIN')")
    @PostMapping("/checked-out-books/calculate-existing-order-details")
    public ResponseEntity<?> calculateExistingOrderDetails(
            @RequestBody final CheckOutPaymentDTO checkOutPaymentDetails) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksCheckoutResource.calculateOrderDetails()");
        Map<Object, Object> response = booksCheckoutService.calculateExistingOrderDetails(checkOutPaymentDetails);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksCheckoutResource.calculateOrderDetails()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.PROCESS_SUCCESSFUL, response), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_SUPER_ADMIN')")
    @PutMapping("/checked-out-books/order-details/book-status")
    public ResponseEntity<?> updateTheBookStatus(@RequestBody final CheckedOutBookDTO checkOutBookDetails) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksCheckoutResource.updateTheBookStatus()");
        Map<Object, Object> response = booksCheckoutService.updateTheBookStatus(checkOutBookDetails);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksCheckoutResource.updateTheBookStatus()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.UPDATE_SUCCESSFUL, response), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_SUPER_ADMIN')")
    @GetMapping("/checked-out-books/rentals")
    public ResponseEntity<?> getCheckedOutBooksByStatus(@RequestParam final String statusId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksCheckoutResource.getCheckedOutBooksByStatus()");
        List<CheckedOutBookDTO> checkedOutBooks = booksCheckoutService.getCheckedOutBooksByStatus(statusId);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksCheckoutResource.getCheckedOutBooksByStatus()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, checkedOutBooks), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_SUPER_ADMIN')")
    @GetMapping("/checked-out-books/users/{userId}/rentals")
    public ResponseEntity<?> getUserCheckedOutBooksByStatus(@PathVariable final long userId, @RequestParam final String checkOutStatusId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksCheckoutResource.getCheckedOutBooksByStatus()");
        List<CheckedOutBookDTO> checkedOutBooks = booksCheckoutService.getUserCheckedOutBooksByStatus(userId, checkOutStatusId);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksCheckoutResource.getCheckedOutBooksByStatus()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, checkedOutBooks), HttpStatus.OK);
    }

}
