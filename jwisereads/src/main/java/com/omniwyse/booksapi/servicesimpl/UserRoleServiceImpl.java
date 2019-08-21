package com.omniwyse.booksapi.servicesimpl;

import com.dieselpoint.norm.DbException;
import com.dieselpoint.norm.Transaction;
import com.omniwyse.booksapi.commons.ValidationMessages;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.dto.UserRoleMaintainDTO;
import com.omniwyse.booksapi.entity.UserRoleMaintainEntity;
import com.omniwyse.booksapi.exceptions.EmptyRolesException;
import com.omniwyse.booksapi.repo.UserRoleMaintainRepo;
import com.omniwyse.booksapi.services.UserRoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;

@Service
public class UserRoleServiceImpl implements UserRoleService {

    private static final Logger LOGGER = LoggerFactory.getLogger(BooksSerivceImpl.class);

    @Autowired
    private UserRoleMaintainRepo userRoleMaintainRepo;

    @Autowired
    private ValidationMessages validationMessages;

    @Autowired
    private TransactionalConfig transactionConfig;

    @Override
    public Map<Object, Object> saveUserRoles(List<UserRoleMaintainDTO> userRoles) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.saveUserRoles()");
        Map<Object, Object> response = new HashMap<>();
        try {
            //Start Transaction
            transactionConfig.startTransaction();

            if (!userRoles.isEmpty()) {
                userRoles.stream().filter(Objects::nonNull).forEach(userRole -> {
                    UserRoleMaintainEntity userRoleData = userRoleMaintainRepo.findByUserIdAndRoleId(userRole.getUserId(), userRole.getRoleId());
                    if (userRoleData != null) {
                        userRoleData.setModifiedOn(new Timestamp(new Date().getTime()));
                        userRoleData.setCreatedBy(userRole.getCreatedBy());
                        userRoleData.setRoleStatus(userRole.getRoleStatus());
                        userRoleMaintainRepo.update(userRoleData);
                    } else {
                        userRoleData = new UserRoleMaintainEntity();
                        userRoleData.setCreatedOn(new Timestamp(new Date().getTime()));
                        userRoleData.setModifiedOn(new Timestamp(new Date().getTime()));
                        userRoleData.setCreatedBy(userRole.getCreatedBy());
                        userRoleData.setRoleStatus(userRole.getRoleStatus());
                        userRoleData.setRoleId(userRole.getRoleId());
                        userRoleData.setUserId(userRole.getUserId());
                        userRoleMaintainRepo.save(userRoleData);
                    }
                });
                //Transaction commit
                transactionConfig.commit();
            } else {
                throw new EmptyRolesException("No roles to update..");
            }
        } catch (DbException e) {
            LOGGER.error("Exception occurred ", e);
            transactionConfig.rollBack();
            throw new DbException(e.getMessage());
        }
        response.put("success", "Users roles updated successfully");
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.saveUserRoles()");
        return response;
    }

    @Override
    public Map<Object, Object> updateUserRoles(List<UserRoleMaintainDTO> userRoles) {
        return null;
    }

    @Override
    public List<UserRoleMaintainDTO> getUserRoles() {
        return null;
    }
}
