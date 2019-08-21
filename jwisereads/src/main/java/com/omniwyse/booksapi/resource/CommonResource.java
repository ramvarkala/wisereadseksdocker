package com.omniwyse.booksapi.resource;

import com.omniwyse.booksapi.constants.AppConstants;
import com.omniwyse.booksapi.services.CommonService;
import com.omniwyse.booksapi.utils.JSONResultEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CommonResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(CommonResource.class);

    private CommonService commonService;

    @Autowired
    public CommonResource(CommonService commonService){
        this.commonService = commonService;
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/api/combo-box-tables")
    public ResponseEntity<?> saveBook(@RequestBody final List<String> tableKeys) {
        LOGGER.debug("Start : com.omniwyse.booksapi.resources.BooksController.saveBook()");
        @SuppressWarnings("rawtypes")
        Map<Object, List<HashMap>> response = commonService.getDropDownData(tableKeys);
        LOGGER.debug("End : com.omniwyse.booksapi.resources.BooksController.saveBook()");
        return new ResponseEntity<>(new JSONResultEntity<>(true, AppConstants.CREATE_SUCCESSFUL, response), HttpStatus.OK);
    }

}
