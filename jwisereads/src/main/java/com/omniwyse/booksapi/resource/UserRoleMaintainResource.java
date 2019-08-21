package com.omniwyse.booksapi.resource;

import com.omniwyse.booksapi.constants.AppConstants;
import com.omniwyse.booksapi.dto.UserRoleMaintainDTO;
import com.omniwyse.booksapi.services.UserRoleService;
import com.omniwyse.booksapi.utils.JSONResultEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserRoleMaintainResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserRoleMaintainResource.class);

    private UserRoleService userRoleService;

    @Autowired
    public UserRoleMaintainResource(UserRoleService userRoleService) {
        this.userRoleService = userRoleService;
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN','ROLE_USER')")
    @PostMapping("/users/assign-roles")
    public ResponseEntity<?> saveUserRole(@RequestBody final List<UserRoleMaintainDTO> userRoles) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.UserRoleMaintainResource.saveUserRoles()");
        Map<Object, Object> response = userRoleService.saveUserRoles(userRoles);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.UserRoleMaintainResource.saveUserRoles()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.CREATE_SUCCESSFUL, response), HttpStatus.OK);
    }
}
