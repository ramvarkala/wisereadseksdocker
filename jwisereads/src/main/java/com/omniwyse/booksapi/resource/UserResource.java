package com.omniwyse.booksapi.resource;

import static com.omniwyse.booksapi.constants.AppConstants.VALIDATION_FAILED;

import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RestController;

import com.omniwyse.booksapi.constants.AppConstants;
import com.omniwyse.booksapi.dto.UserDetailsDTO;
import com.omniwyse.booksapi.services.UserService;
import com.omniwyse.booksapi.utils.JSONResultEntity;

@RestController
@RequestMapping("/api")
public class UserResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserResource.class);

    private UserService userService;

    @Autowired
    public UserResource(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users")
    public ResponseEntity<?> saveUser(@RequestBody final UserDetailsDTO userData) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.UserResource.saveUser()");
        System.out.println("In save user resource");
        Map<Object, Object> response = userService.saveUser(userData);
        if (response.containsKey(VALIDATION_FAILED)) {
            return new ResponseEntity<>(new JSONResultEntity<>(false, AppConstants.CREATE_FAILED, null, response),
                    HttpStatus.BAD_REQUEST);
        }
        LOGGER.debug("End : com.omniwyse.booksapi.resources.UserResource.saveUser()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.CREATE_SUCCESSFUL, response),
                HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @PutMapping("/users/{userId}")
    public ResponseEntity<?> updateUser(@PathVariable final long userId, @RequestBody final UserDetailsDTO userData) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.UserResource.updateUser()");
        Map<Object, Object> response = userService.updateUser(userId, userData);
        if (response.containsKey(VALIDATION_FAILED)) {
            return new ResponseEntity<>(new JSONResultEntity<>(false, AppConstants.UPDATE_FAILED, null, response),
                    HttpStatus.BAD_REQUEST);
        }
        LOGGER.debug("End : com.omniwyse.booksapi.resources.UserResource.updateUser()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.UPDATE_SUCCESSFUL, response),
                HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    @GetMapping("/users/{userId}")
    public ResponseEntity<?> getUser(@PathVariable final long userId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.UserResource.getUser()");
        UserDetailsDTO user = userService.getUser(userId);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.UserResource.getUser()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, user),
                HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    @GetMapping("/users")
    public ResponseEntity<?> getUsers() {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.UserResource.getUsers()");
        List<UserDetailsDTO> users = userService.getUsers();
        LOGGER.debug("End : com.omniwyse.booksapi.resources.UserResource.getUsers()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.FOUND_SUCCESSFUL, users),
                HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_BOOK_OWNER','ROLE_SUPER_ADMIN')")
    @PutMapping("/users/change-password")
    public ResponseEntity<?> changeUserPassword(@RequestBody final UserDetailsDTO userData) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.UserResource.changeUserPassword()");
        Map<Object, Object> response = userService.changeUserPassword(userData);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.UserResource.changeUserPassword()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.UPDATE_SUCCESSFUL, response),
                HttpStatus.OK);
    }
}
