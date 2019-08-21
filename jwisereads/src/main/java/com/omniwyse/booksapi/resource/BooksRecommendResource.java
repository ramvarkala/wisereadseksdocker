package com.omniwyse.booksapi.resource;

import com.omniwyse.booksapi.constants.AppConstants;
import com.omniwyse.booksapi.dto.BookRecommendationDTO;
import com.omniwyse.booksapi.entity.BookRecommendationEntity;
import com.omniwyse.booksapi.services.BooksRecommendService;
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
public class BooksRecommendResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(BooksRecommendResource.class);

    private BooksRecommendService booksRecommendService;

    @Autowired
    public BooksRecommendResource(BooksRecommendService booksRecommendService) {
        this.booksRecommendService = booksRecommendService;
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    @PostMapping("/recommended-books")
    public ResponseEntity<?> saveBookRecommendation(@RequestBody final BookRecommendationDTO bookRecDetails) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksRecommendResource.saveBookRecommendation()");
        Map<Object, Object> response = booksRecommendService.saveBookRecommendation(bookRecDetails);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksRecommendResource.saveBookRecommendation()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.CREATE_SUCCESSFUL, response), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    @PutMapping("/recommended-books/{bookRecId}")
    public ResponseEntity<?> updateBookRecommendation(@PathVariable final long bookRecId,
                                                      @RequestBody BookRecommendationDTO bookRecDetails) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksRecommendResource.updateBookRecommendation()");
        Map<Object, Object> response = booksRecommendService.updateBookRecommendation(bookRecId, bookRecDetails);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksRecommendResource.updateBookRecommendation()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.UPDATE_SUCCESSFUL, response), HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/recommended-books/{bookRecId}")
    public ResponseEntity<?> getBookRecommendation(@PathVariable final long bookRecId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksRecommendResource.getBookRecommendation()");
        BookRecommendationEntity bookRecommendation = booksRecommendService.getBookRecommendation(bookRecId);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksRecommendResource.getBookRecommendation()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, bookRecommendation), HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/recommended-books")
    public ResponseEntity<?> getBooksRecommendations() {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksRecommendResource.getBooksRecommendations()");
        List<BookRecommendationEntity> bookRecommendations = booksRecommendService.getBooksRecommendations();
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksRecommendResource.getBooksRecommendations()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, bookRecommendations), HttpStatus.OK);
    }

    @GetMapping("/recommended-books/category-wise")
    public ResponseEntity<?> getCategoryWiseBooksRec() {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksRecommendResource.getCategoryWiseBooksRec()");
        Map<Object, Object> bookRecommendations = booksRecommendService.getCategoryWiseBooksRec();
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksRecommendResource.getCategoryWiseBooksRec()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, bookRecommendations), HttpStatus.OK);
    }
}
