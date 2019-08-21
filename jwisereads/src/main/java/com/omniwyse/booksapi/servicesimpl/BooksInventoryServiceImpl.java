package com.omniwyse.booksapi.servicesimpl;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.commons.ValidationMessages;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.dto.BooksInventoryDTO;
import com.omniwyse.booksapi.entity.BooksInventoryEntity;
import com.omniwyse.booksapi.exceptions.RecordNotFoundException;
import com.omniwyse.booksapi.repo.BooksInventoryRepo;
import com.omniwyse.booksapi.services.BooksInventoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.omniwyse.booksapi.commons.ExceptionMessagesKeys.INVENTORY_BOOK_NOT_FOUND;

@Service
public class BooksInventoryServiceImpl implements BooksInventoryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(BooksInventoryServiceImpl.class);

    private BooksInventoryRepo booksInventoryRepo;
    private ValidationMessages validationMessages;
    private TransactionalConfig transactionConfig;

    @Autowired
    public BooksInventoryServiceImpl(BooksInventoryRepo booksInventoryRepo, ValidationMessages validationMessages, TransactionalConfig transactionConfig) {
        this.booksInventoryRepo = booksInventoryRepo;
        this.validationMessages = validationMessages;
        this.transactionConfig = transactionConfig;
    }

    @Override
    public List<BooksInventoryDTO> getInventoryBooks() {
        LOGGER.debug("Start: com.omniwyse.booksapi.servicesimpl.BooksInventoryServiceImpl.getInventoryBooks()");
        final List<BooksInventoryDTO> inventoryBooks = booksInventoryRepo.findAll();
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksInventoryServiceImpl.getInventoryBooks()");
        return inventoryBooks;
    }

    @Override
    public Map<Object, Object> saveInventoryBook(final BooksInventoryDTO bookInventoryDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksInventoryServiceImpl.saveInventoryBook()");
        final Map<Object, Object> response = new HashMap<>();
        final BooksInventoryEntity inventoryBook = setInventoryBookData(bookInventoryDetails);
        try {
            //Start transaction
            transactionConfig.startTransaction();

            booksInventoryRepo.save(inventoryBook);

            //Commit transaction
            transactionConfig.commit();
        } catch (DbException e) {
            LOGGER.error("Exception occurred ", e);
            //Roll back
            transactionConfig.rollBack();
            throw new DbException(e.getMessage());
        }
        response.put("inventoryBook", inventoryBook);
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksInventoryServiceImpl.saveInventoryBook()");
        return response;
    }

    @Override
    public BooksInventoryEntity getInventoryBook(final long bookInvId) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksInventoryServiceImpl.getInventoryBook()");
        final BooksInventoryEntity inventoryBook = booksInventoryRepo.findByBookInvId(bookInvId);
        if (inventoryBook == null) {
            throw new RecordNotFoundException(validationMessages.getExceptionMessage(INVENTORY_BOOK_NOT_FOUND));
        }
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksInventoryServiceImpl.getInventoryBook()");
        return inventoryBook;
    }

    @Override
    public Map<Object, Object> updateInventoryBook(final long bookInvId, final BooksInventoryDTO bookInventoryDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksInventoryServiceImpl.updateInventoryBook()");
        final Map<Object, Object> response = new HashMap<>();
        final BooksInventoryEntity existingInventoryCopy = getInventoryBook(bookInvId);
        BooksInventoryEntity inventoryBook = setInventoryBookData(bookInventoryDetails);
        inventoryBook.setCreatedOn(existingInventoryCopy.getCreatedOn());
        try {
            //Start transaction
            transactionConfig.startTransaction();
            inventoryBook = booksInventoryRepo.update(inventoryBook);

            //Transaction commit
            transactionConfig.commit();
        } catch (DbException e) {
            LOGGER.error("Exception occurred ", e);
            //Roll back
            transactionConfig.rollBack();
            throw new DbException(e.getMessage());
        }
        response.put("inventoryBook", inventoryBook);
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksInventoryServiceImpl.updateInventoryBook()");
        return response;
    }

    private BooksInventoryEntity setInventoryBookData(final BooksInventoryDTO bookInventoryDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksInventoryServiceImpl.setInventoryBookData()");
        final BooksInventoryEntity inventoryBook = new BooksInventoryEntity();
        inventoryBook.setInventoryId(bookInventoryDetails.getInventoryId());
        inventoryBook.setBookId(bookInventoryDetails.getBookId());
        inventoryBook.setOwnerId(bookInventoryDetails.getOwnerId());
        inventoryBook.setAvailabilityId(bookInventoryDetails.getAvailabilityId());
        inventoryBook.setAvailableDate(bookInventoryDetails.getAvailableDate());
        inventoryBook.setBuyFlag(bookInventoryDetails.getBuyFlag());
        inventoryBook.setRentFlag(bookInventoryDetails.getRentFlag());
        inventoryBook.setWhereIsTheBook(bookInventoryDetails.getWhereIsTheBook());
        inventoryBook.setRecommendedBy(bookInventoryDetails.getRecommendedBy());
        inventoryBook.setLocationId(bookInventoryDetails.getLocationId());
        inventoryBook.setCreatedBy(bookInventoryDetails.getCreatedBy());
        inventoryBook.setCreatedOn(new Timestamp(new Date().getTime()));
        inventoryBook.setModifiedOn(new Timestamp(new Date().getTime()));
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksInventoryServiceImpl.setInventoryBookData()");
        return inventoryBook;
    }


}
