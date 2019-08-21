package com.omniwyse.booksapi.repoimpl;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.db.DBFactory;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.dto.BooksInventoryDTO;
import com.omniwyse.booksapi.entity.BooksInventoryEntity;
import com.omniwyse.booksapi.exceptions.ConstraintViolationException;
import com.omniwyse.booksapi.repo.BooksInventoryRepo;
import com.omniwyse.booksapi.utils.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;

import static com.omniwyse.booksapi.constants.QueryConstants.INVENTORY_BOOKS_DATA;
import static com.omniwyse.booksapi.constants.QueryConstants.INVENTORY_BOOKS_LIST;

@Repository
public class BooksInventoryRepoImpl implements BooksInventoryRepo {

    private static final Logger LOGGER = LoggerFactory.getLogger(BooksInventoryRepoImpl.class);

    @Autowired
    private DBFactory dbFactory;

    @Autowired
    private TransactionalConfig transactionConfig;

    @Override
    public List<BooksInventoryDTO> findAll() {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksInventoryRepoImpl.findAll()");
        return dbFactory.getDb().sql(INVENTORY_BOOKS_DATA).results(BooksInventoryDTO.class);
    }

    @Override
    public BooksInventoryEntity save(final BooksInventoryEntity inventoryBook) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksInventoryRepoImpl.save()");
        try {
            dbFactory.getDb().transaction(transactionConfig.getTransaction()).insert(inventoryBook).getRowsAffected();
        } catch (DbException e) {
            if (ExceptionUtils.isSqlConstraintException(e.getCause().getClass())) {
                LOGGER.error("Constraint violation exception ....");
                if (e.getMessage().contains("unique_index")) {
                    throw new DbException("Book already exists...");
                } else if (e.getMessage().contains("null")) { // no need , need to handle it before service
                    throw new DbException("You must enter all fields");
                }
            }
        }
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksInventoryRepoImpl.save()");
        return inventoryBook;
    }

    @Override
    public BooksInventoryEntity findByBookInvId(final long bookInvId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksInventoryRepoImpl.find()");
        final List<BooksInventoryEntity> inventoryBooks = dbFactory.getDb()
                .sql(INVENTORY_BOOKS_LIST + " where inventory_id = ?", bookInvId).results(BooksInventoryEntity.class);
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksInventoryRepoImpl.find()");
        return inventoryBooks.stream().filter(Objects::nonNull).findFirst().orElse(null);
    }

    @Override
    public BooksInventoryEntity update(final BooksInventoryEntity inventoryBook) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksInventoryRepoImpl.update()");
        dbFactory.getDb().transaction(transactionConfig.getTransaction()).update(inventoryBook).getRowsAffected();
        //dbFactory.getDb().transaction(transactionConfig.getTransaction()).update(inventoryBook).getRowsAffected();
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksInventoryRepoImpl.update()");
        return inventoryBook;
    }

}
