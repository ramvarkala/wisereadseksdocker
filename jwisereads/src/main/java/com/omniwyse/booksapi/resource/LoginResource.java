package com.omniwyse.booksapi.resource;

import com.omniwyse.booksapi.entity.UserCredentialsEntity;
import com.omniwyse.booksapi.services.LoginService;
import com.omniwyse.booksapi.servicesimpl.MyUserDetailsServiceImpl;
import com.omniwyse.booksapi.utils.JSONResultEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class LoginResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoginResource.class);

    private LoginService loginService;

    @Autowired
    public LoginResource(LoginService loginService) {
        this.loginService = loginService;
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/login", produces = "application/json")
    public ResponseEntity<?> validateLogin() {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.LoginResource.validateLogin()");
        UserCredentialsEntity user = new UserCredentialsEntity();
        user.setEmail(MyUserDetailsServiceImpl.currentUser);
        MyUserDetailsServiceImpl.currentUser = "";
        Map<Object, Object> response = loginService.validateLogin(user);
        response.put("sessionToken", MyUserDetailsServiceImpl.currentToken);
        MyUserDetailsServiceImpl.currentToken = "";
        LOGGER.debug("End : com.omniwyse.booksapi.resources.LoginResource.validateLogin()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, "Logged in successfully",
                response), HttpStatus.OK);
    }
}
