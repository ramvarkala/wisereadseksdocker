package com.omniwyse.booksapi.resource;

import com.omniwyse.booksapi.constants.AppConstants;
import com.omniwyse.booksapi.dto.BooksInventoryDTO;
import com.omniwyse.booksapi.entity.BooksInventoryEntity;
import com.omniwyse.booksapi.services.BooksInventoryService;
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
public class BooksInventoryResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(BooksInventoryResource.class);

    private BooksInventoryService booksInventoryService;

    @Autowired
    public BooksInventoryResource(BooksInventoryService booksInventoryService) {
        this.booksInventoryService = booksInventoryService;
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    @PostMapping("/inventory-books")
    public ResponseEntity<?> saveBooksInventory(@RequestBody final BooksInventoryDTO bookInvDetails) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksInventoryResource.saveBooksInventory()");
        Map<Object, Object> response = booksInventoryService.saveInventoryBook(bookInvDetails);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksInventoryResource.saveBooksInventory()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.CREATE_SUCCESSFUL, response), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    @PutMapping("/inventory-books/{BookInvId}")
    public ResponseEntity<?> updateBookInventory(@PathVariable final long BookInvId,
                                                 @RequestBody BooksInventoryDTO bookInvDetails) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksInventoryResource.updateBookInventory()");
        Map<Object, Object> response = booksInventoryService.updateInventoryBook(BookInvId, bookInvDetails);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksInventoryResource.updateBookInventory()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.UPDATE_SUCCESSFUL, response), HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/inventory-books/{BookInvId}")
    public ResponseEntity<?> getInventoryBook(@PathVariable final long BookInvId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksInventoryResource.getInventoryBook()");
        BooksInventoryEntity inventoryBook = booksInventoryService.getInventoryBook(BookInvId);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksInventoryResource.getInventoryBook()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, inventoryBook), HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/inventory-books")
    public ResponseEntity<?> getInventoryBooks() {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksInventoryResource.getInventoryBooks()");
        List<BooksInventoryDTO> inventoryBooks = booksInventoryService.getInventoryBooks();
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksInventoryResource.getInventoryBooks()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, inventoryBooks), HttpStatus.OK);
    }

}
