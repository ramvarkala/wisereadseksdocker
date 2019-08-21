package com.omniwyse.booksapi.resource;

import com.omniwyse.booksapi.constants.AppConstants;
import com.omniwyse.booksapi.dto.BookOwnerDTO;
import com.omniwyse.booksapi.entity.BookOwnerEntity;
import com.omniwyse.booksapi.security.EncryptData;
import com.omniwyse.booksapi.services.BooksOwnerService;
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
public class BooksOwnerResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(BooksOwnerResource.class);

    private BooksOwnerService booksOwnerService;

    @Autowired
    public BooksOwnerResource(BooksOwnerService booksOwnerService) {
        this.booksOwnerService = booksOwnerService;
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    @PostMapping("/owners")
    public ResponseEntity<?> saveOwner(@RequestBody final BookOwnerDTO ownerData) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksOwnerResource.saveOwner()");
        ownerData.setPassword(EncryptData.encryptData(ownerData.getPassword()));
        Map<Object, Object> response = booksOwnerService.saveOwner(ownerData);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksOwnerResource.saveOwner()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.CREATE_SUCCESSFUL, response), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    @PutMapping("/owners/{ownerId}")
    public ResponseEntity<?> updateOwner(@PathVariable final long ownerId, @RequestBody final BookOwnerDTO ownerData) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksOwnerResource.updateOwner()");
        Map<Object, Object> response = booksOwnerService.updateOwner(ownerId, ownerData);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksOwnerResource.updateOwner()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.CREATE_SUCCESSFUL, response), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    @GetMapping("/owners/{ownerId}")
    public ResponseEntity<?> getOwner(@PathVariable final long ownerId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksOwnerResource.getOwner()");
        BookOwnerEntity owner = booksOwnerService.getOwner(ownerId);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksOwnerResource.getOwner()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.CREATE_SUCCESSFUL, owner), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    @GetMapping("/owners")
    public ResponseEntity<?> getOwners() {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksOwnerResource.getOwners()");
        List<BookOwnerEntity> owners = booksOwnerService.getOwners();
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksOwnerResource.getOwners()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.CREATE_SUCCESSFUL, owners), HttpStatus.OK);
    }
}
