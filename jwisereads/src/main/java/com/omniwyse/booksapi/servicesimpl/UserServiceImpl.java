package com.omniwyse.booksapi.servicesimpl;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.commons.ValidationMessages;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.dto.UserDetailsDTO;
import com.omniwyse.booksapi.entity.UserCredentialsEntity;
import com.omniwyse.booksapi.entity.UserDetailsEntity;
import com.omniwyse.booksapi.entity.UserRoleMaintainEntity;
import com.omniwyse.booksapi.exceptions.EmailAlreadyRegisteredException;
import com.omniwyse.booksapi.exceptions.PasswordDoesNotMatchException;
import com.omniwyse.booksapi.exceptions.UserNotFoundException;
import com.omniwyse.booksapi.repo.UserCredentialsRepo;
import com.omniwyse.booksapi.repo.UserDetailsRepo;
import com.omniwyse.booksapi.repo.UserRoleMaintainRepo;
import com.omniwyse.booksapi.security.EncryptData;
import com.omniwyse.booksapi.services.UserService;
import com.omniwyse.booksapi.utils.ValidationUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collectors;

import static com.omniwyse.booksapi.commons.ExceptionMessagesKeys.USER_NOT_FOUND;
import static com.omniwyse.booksapi.constants.AppConstants.*;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

    private TransactionalConfig transactionConfig;
    private UserDetailsRepo userDetailsRepo;
    private UserCredentialsRepo userCredentialsRepo;
    private UserRoleMaintainRepo userRoleMaintainRepo;
    private ValidationMessages validationMessages;

    @Autowired
    public UserServiceImpl(TransactionalConfig transactionConfig, UserDetailsRepo userDetailsRepo, UserCredentialsRepo userCredentialsRepo,
                           UserRoleMaintainRepo userRoleMaintainRepo, ValidationMessages validationMessages) {
        this.transactionConfig = transactionConfig;
        this.userCredentialsRepo = userCredentialsRepo;
        this.userDetailsRepo = userDetailsRepo;
        this.validationMessages = validationMessages;
        this.userRoleMaintainRepo = userRoleMaintainRepo;
    }

    @Override
    public List<UserDetailsDTO> getUsers() {
        LOGGER.debug("Start : com.omniwyse.booksapi.servicesimpl.UserServiceImpl.getUsers()");
        final List<UserDetailsDTO> users = userDetailsRepo.findAll();
        LOGGER.debug("End : com.omniwyse.booksapi.servicesimpl.UserServiceImpl.getUsers()");
        return users.stream().filter(Objects::nonNull).map(user -> {
            user.setUserRoles(userRoleMaintainRepo.findRolesByUserId(user.getUserId()));
            return user;
        }).collect(Collectors.toList());
    }

    @Override
    public Map<Object, Object> saveUser(final UserDetailsDTO userDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.UserServiceImpl.saveUser()");
        final Map<Object, Object> response = validateUser(userDetails);
        userDetails.setPassword(EncryptData.encryptData(userDetails.getPassword()));
        if (!response.isEmpty()) {
            return response;
        }
        if (userDetails.getEmail() != null) {
            userDetails.setEmail(userDetails.getEmail().toLowerCase());
        }
        try {
            final UserCredentialsEntity userCerdentials = userCredentialsRepo.findByUsername(userDetails.getEmail());
            if (userCerdentials == null) {
                final UserDetailsEntity user = setUserData(userDetails);
                //Start Transaction
                transactionConfig.startTransaction();

                final UserCredentialsEntity userCredentials = new UserCredentialsEntity();
                userCredentials.setEmail(userDetails.getEmail());
                userCredentials.setPassword(userDetails.getPassword());
                userCredentials.setStatusId(USER_ACTIVE_ID);
                userCredentials.setCreatedBy(userDetails.getCreatedBy());
                userCredentials.setCreatedOn(new Timestamp(new Date().getTime()));
                userCredentials.setModifiedOn(new Timestamp(new Date().getTime()));

                userCredentialsRepo.save(userCredentials);

                final UserRoleMaintainEntity userRoleData = new UserRoleMaintainEntity();
                userRoleData.setRoleId(userDetails.getRoleId());
                userRoleData.setUserId(userCredentials.getUserId());
                userRoleData.setCreatedBy(userDetails.getCreatedBy());
                userRoleData.setRoleStatus(USER_ROLE_ACTIVE_ID);
                userRoleData.setCreatedOn(new Timestamp(new Date().getTime()));
                userRoleData.setModifiedOn(new Timestamp(new Date().getTime()));
                userRoleMaintainRepo.save(userRoleData);

                user.setUserId(userCredentials.getUserId());

                userDetailsRepo.save(user);

                //Transaction commit
                transactionConfig.commit();

                UserDetailsDTO userData = setUserData(user);
                userData.setUserRoles(userRoleMaintainRepo.findRolesByUserId(user.getUserId()));
                response.put("user", userData);
            } else {
                throw new EmailAlreadyRegisteredException("Email already registered");
            }
        } catch (DbException e) {
            LOGGER.error("Exception occurred ", e);
            transactionConfig.rollBack();
            throw new DbException(e.getMessage());
        }
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.UserServiceImpl.saveUser()");
        return response;
    }

    @Override
    public UserDetailsDTO getUser(final long userId) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.UserServiceImpl.getUser()");
        final UserDetailsDTO user = userDetailsRepo.findUserDetailsByUserId(userId);
        if (user == null) {
            throw new UserNotFoundException(validationMessages.getExceptionMessage(USER_NOT_FOUND));
        }
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.UserServiceImpl.getUser()");
        return user;
    }

    @Override
    public Map<Object, Object> updateUser(final long userId, final UserDetailsDTO userDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.UserServiceImpl.updateBookRecommendation()");
        userDetails.setUserId(userId);
        final Map<Object, Object> response = validateUser(userDetails);
        if (!response.isEmpty()) {
            return response;
        }

        final UserDetailsEntity existingCopy = userDetailsRepo.findByUserId(userId);
        if (existingCopy == null) {
            throw new UserNotFoundException(validationMessages.getExceptionMessage(USER_NOT_FOUND));
        }
        try {
            //Start Transaction
            transactionConfig.startTransaction();

            UserDetailsEntity user = setUserData(userDetails);
            user.setCreatedOn(existingCopy.getCreatedOn());
            user = userDetailsRepo.update(user);

            //Update the user credentials for login credentials
            UserCredentialsEntity userCredentials = userCredentialsRepo.findByUserId(userId);
            userCredentials.setEmail(userDetails.getEmail());
            userCredentials.setCreatedBy(userDetails.getCreatedBy());
            userCredentials.setModifiedOn(new Timestamp(new Date().getTime()));
            userCredentialsRepo.update(userCredentials);

            //Transaction commit
            transactionConfig.commit();

            UserDetailsDTO userData = setUserData(user);
            userData.setUserRoles(userRoleMaintainRepo.findRolesByUserId(userDetails.getUserId()));
            response.put("user", userData);
        } catch (DbException e) {
            LOGGER.error("Exception occurred ", e);
            transactionConfig.rollBack();
            throw new DbException(e.getMessage());
        }

        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.UserServiceImpl.updateBookRecommendation()");
        return response;
    }

    public UserDetailsEntity setUserData(final UserDetailsDTO userDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.UserServiceImpl.setUserData()");
        final UserDetailsEntity user = new UserDetailsEntity();
        user.setUserRegId(userDetails.getUserRegId());
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setEmail(userDetails.getEmail());
        user.setUserId(userDetails.getUserId());
        user.setContactNumber(userDetails.getContactNumber());
        user.setAddress(userDetails.getAddress());
        user.setGenderId(userDetails.getGenderId());
        user.setUserStatusId(userDetails.getUserStatusId());
        user.setCompanyName(userDetails.getCompanyName());
        user.setDateOfBirth(userDetails.getDateOfBirth());
        user.setCreatedBy(userDetails.getCreatedBy());
        user.setCreatedOn(new Timestamp(new Date().getTime()));
        user.setModifiedOn(new Timestamp(new Date().getTime()));
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.UserServiceImpl.setUserData()");
        return user;
    }

    private UserDetailsDTO setUserData(final UserDetailsEntity user) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.UserServiceImpl.setUserData()");
        final UserDetailsDTO userData = new UserDetailsDTO();
        userData.setUserRegId(user.getUserRegId());
        userData.setFirstName(user.getFirstName());
        userData.setLastName(user.getLastName());
        userData.setEmail(user.getEmail());
        userData.setUserId(user.getUserId());
        userData.setContactNumber(user.getContactNumber());
        userData.setAddress(user.getAddress());
        userData.setGenderId(user.getGenderId());
        userData.setUserStatusId(user.getUserStatusId());
        userData.setCompanyName(user.getCompanyName());
        userData.setDateOfBirth(user.getDateOfBirth());
        userData.setCreatedBy(user.getCreatedBy());
        userData.setCreatedOn(new Timestamp(new Date().getTime()));
        userData.setModifiedOn(new Timestamp(new Date().getTime()));
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.UserServiceImpl.setUserData()");
        return userData;
    }

    @Override
    public Map<Object, Object> changeUserPassword(final UserDetailsDTO userData) {
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.UserServiceImpl.changeUserPassword()");
        final Map<Object, Object> response = new HashMap<>();
        userData.setEmail(userData.getEmail().toLowerCase());
        UserCredentialsEntity userCredentials = userCredentialsRepo.findByUsername(userData.getEmail());
        if (userCredentials != null) {
            final boolean passwordMatch = EncryptData.ENCODER.matches(userData.getOldPassword(),
                    userCredentials.getPassword());
            if (passwordMatch) {
                userData.setPassword(EncryptData.encryptData(userData.getPassword()));
                userCredentials.setPassword(userData.getPassword());
                userCredentials.setModifiedOn(new Timestamp(new Date().getTime()));
                userCredentials.setCreatedBy(userData.getCreatedBy());
                userCredentialsRepo.update(userCredentials);
                response.put("successMsg", "Successfully updated the password");
            } else {
                throw new PasswordDoesNotMatchException("Old password does not match");
            }
        } else {
            throw new UserNotFoundException("User does not Exist / inactive");
        }
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.UserServiceImpl.changeUserPassword()");
        return response;
    }


    private Map<Object, Object> validateUser(UserDetailsDTO user) {
        final Map<Object, Object> response = new HashMap<>();
        if (user != null) {
            if (ValidationUtils.checkEmptyOrNull(user.getEmail())) {
                response.put("email", "Email can not be empty");
            }
            if (user.getUserId() == 0 && ValidationUtils.checkEmptyOrNull(user.getPassword())) {
                response.put("password", "Password can not be empty");
            }
            if (ValidationUtils.checkEmptyOrNull(user.getFirstName())) {
                response.put("firstName", "First name can not be empty");
            }
            if (ValidationUtils.checkEmptyOrNull(user.getAddress())) {
                response.put("address", "Address can not be empty");
            }
            if (ValidationUtils.checkZeroOrLessThan(user.getContactNumber())) {
                response.put("contactNumber", "Contact number can not be empty");
            }
            if (ValidationUtils.checkZeroOrLessThan(user.getGenderId())) {
                response.put("gender", "Gender can not be empty");
            }
            if (ValidationUtils.checkZeroOrLessThan(user.getUserStatusId())) {
                response.put("userStatus", "User status can not be empty");
            }
            if (ValidationUtils.checkEmptyOrNull(user.getCreatedBy())) {
                response.put("createdBy", "Created by can not be empty");
            }
        } else {
            response.put("canNotEmpty", "User can not be empty");
        }
        if (!response.isEmpty()) {
            response.put(VALIDATION_FAILED, true);
        }
        return response;
    }
}
