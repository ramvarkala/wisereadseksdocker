package com.omniwyse.booksapi.servicesimpl;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.commons.ValidationMessages;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.dto.BookOwnerDTO;
import com.omniwyse.booksapi.entity.BookOwnerEntity;
import com.omniwyse.booksapi.entity.UserCredentialsEntity;
import com.omniwyse.booksapi.entity.UserRoleMaintainEntity;
import com.omniwyse.booksapi.exceptions.EmailAlreadyRegisteredException;
import com.omniwyse.booksapi.exceptions.UserNotFoundException;
import com.omniwyse.booksapi.repo.BooksOwnerRepo;
import com.omniwyse.booksapi.repo.UserCredentialsRepo;
import com.omniwyse.booksapi.repo.UserRoleMaintainRepo;
import com.omniwyse.booksapi.services.BooksOwnerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.omniwyse.booksapi.commons.ExceptionMessagesKeys.USER_NOT_FOUND;
import static com.omniwyse.booksapi.constants.AppConstants.USER_ACTIVE_ID;

@Service
public class BooksOwnerServiceImpl implements BooksOwnerService {

    private static final Logger LOGGER = LoggerFactory.getLogger(BooksOwnerServiceImpl.class);

    @Autowired
    private BooksOwnerRepo booksOwnerRepo;

    @Autowired
    private UserCredentialsRepo userCredentialsRepo;

    @Autowired
    private UserRoleMaintainRepo userRoleMaintainRepo;

    @Autowired
    private ValidationMessages validationMessages;

    @Autowired
    private TransactionalConfig transactionConfig;

    @Override
    public List<BookOwnerEntity> getOwners() {
        LOGGER.debug("Start : com.omniwyse.booksapi.servicesimpl.BooksOwnerServiceImpl.getOwners()");
        List<BookOwnerEntity> owners = booksOwnerRepo.findAll();
        LOGGER.debug("End : com.omniwyse.booksapi.servicesimpl.BooksOwnerServiceImpl.getOwners()");
        return owners;
    }

    @Override
    public Map<Object, Object> saveOwner(final BookOwnerDTO ownerDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksOwnerServiceImpl.saveOwner()");
        final Map<Object, Object> response = new HashMap<>();
        if (ownerDetails.getEmail() != null) {
            ownerDetails.setEmail(ownerDetails.getEmail().toLowerCase());
        }
        final UserCredentialsEntity userCredentialsData = userCredentialsRepo.findByUsername(ownerDetails.getEmail());
        if (userCredentialsData == null) {
            final BookOwnerEntity owner = setOwnerData(ownerDetails);
            try {
                transactionConfig.startTransaction();
                final UserCredentialsEntity userCredentials = new UserCredentialsEntity();
                userCredentials.setEmail(ownerDetails.getEmail());
                userCredentials.setPassword(ownerDetails.getPassword());
                userCredentials.setStatusId(USER_ACTIVE_ID);

                userCredentials.setCreatedBy(ownerDetails.getCreatedBy());
                userCredentials.setCreatedOn(new Timestamp(new Date().getTime()));
                userCredentials.setModifiedOn(new Timestamp(new Date().getTime()));

                userCredentialsRepo.save(userCredentials);

                final UserRoleMaintainEntity userRoleData = new UserRoleMaintainEntity();
                userRoleData.setRoleId(ownerDetails.getRoleId());
                userRoleData.setUserId(userCredentials.getUserId());
                userRoleData.setCreatedBy(ownerDetails.getCreatedBy());
                userRoleData.setCreatedOn(new Timestamp(new Date().getTime()));
                userRoleData.setModifiedOn(new Timestamp(new Date().getTime()));
                userRoleMaintainRepo.save(userRoleData);

                owner.setUserId(userCredentials.getUserId());
                booksOwnerRepo.save(owner);
                transactionConfig.commit();
            } catch (DbException e) {
                LOGGER.error("Exception occurred ", e);
                //Roll back
                transactionConfig.rollBack();
                throw new DbException(e.getMessage());
            }
            response.put("owner", owner);
        } else {
            throw new EmailAlreadyRegisteredException("Email already registered");
        }
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksOwnerServiceImpl.saveOwner()");
        return response;
    }

    @Override
    public BookOwnerEntity getOwner(final long ownerId) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksOwnerServiceImpl.getOwner()");
        final BookOwnerEntity owner = booksOwnerRepo.findByOwnerId(ownerId);
        if (owner == null) {
            throw new UserNotFoundException(validationMessages.getExceptionMessage(USER_NOT_FOUND));
        }
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksOwnerServiceImpl.getOwner()");
        return owner;
    }

    @Override
    public Map<Object, Object> updateOwner(final long ownerId, final BookOwnerDTO ownerData) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksOwnerServiceImpl.updateOwner()");
        final Map<Object, Object> response = new HashMap<>();
        final BookOwnerEntity existingCopy = getOwner(ownerId);
        BookOwnerEntity owner = setOwnerData(ownerData);
        owner.setCreatedOn(existingCopy.getCreatedOn());
        try {
            //Start transaction
            transactionConfig.startTransaction();
            owner = booksOwnerRepo.update(owner);

            //commit transaction
            transactionConfig.commit();
        }catch (DbException e){
            LOGGER.error("Exception occurred ", e);
            //Roll back
            transactionConfig.rollBack();
            throw new DbException(e.getMessage());
        }
        response.put("owner", owner);
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksOwnerServiceImpl.updateOwner()");
        return response;
    }

    public BookOwnerEntity setOwnerData(final BookOwnerDTO ownerDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksOwnerServiceImpl.setOwnerData()");
        final BookOwnerEntity owner = new BookOwnerEntity();
        owner.setOwnerId(ownerDetails.getOwnerId());
        owner.setFirstName(ownerDetails.getFirstName());
        owner.setLastName(ownerDetails.getLastName());
        owner.setEmail(ownerDetails.getEmail());
        owner.setContactNumber(ownerDetails.getContactNumber());
        owner.setAddress(ownerDetails.getAddress());
        owner.setGenderId(ownerDetails.getGenderId());
        owner.setStatusId(ownerDetails.getStatusId());
        owner.setCreatedBy(ownerDetails.getCreatedBy());
        owner.setCompanyName(ownerDetails.getCompanyName());
        owner.setDateOfBirth(ownerDetails.getDateOfBirth());
        owner.setCreatedOn(new Timestamp(new Date().getTime()));
        owner.setModifiedOn(new Timestamp(new Date().getTime()));
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksOwnerServiceImpl.setOwnerData()");
        return owner;
    }

}
