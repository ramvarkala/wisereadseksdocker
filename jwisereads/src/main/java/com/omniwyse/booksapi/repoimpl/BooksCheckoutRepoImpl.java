package com.omniwyse.booksapi.repoimpl;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.db.DBFactory;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.dto.CheckedOutBookDTO;
import com.omniwyse.booksapi.entity.CheckedOutBookEntity;
import com.omniwyse.booksapi.repo.BooksCheckoutRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;

import static com.omniwyse.booksapi.constants.QueryConstants.CHECKED_OUT_BOOKS_DATA;
import static com.omniwyse.booksapi.constants.QueryConstants.GET_INV_BOOK_CHECKOUT_STATUS;

@Repository
public class BooksCheckoutRepoImpl implements BooksCheckoutRepo {

    private static final Logger LOGGER = LoggerFactory.getLogger(BooksCheckoutRepoImpl.class);

    @Autowired
    private DBFactory dbFactory;

    @Autowired
    private TransactionalConfig transactionConfig;

    @Override
    public List<CheckedOutBookDTO> findAll() {

        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findAll()");
        return dbFactory.getDb().sql(CHECKED_OUT_BOOKS_DATA).results(CheckedOutBookDTO.class);
    }

    @Override
    public CheckedOutBookEntity save(final CheckedOutBookEntity checkedOutBook) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.save()");
        try {
            dbFactory.getDb().transaction(transactionConfig.getTransaction()).insert(checkedOutBook).getRowsAffected();
        } catch (DbException e) {
            LOGGER.error("Exception occured", e);
            throw new DbException(e.getMessage());
        }
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.save()");
        return checkedOutBook;
    }


    @Override
    public CheckedOutBookEntity findByCheckOutId(long checkedOutBookId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findByCheckOutId()");
        List<CheckedOutBookEntity> checkedOutBooks = dbFactory.getDb()
                .where("checkout_id = ?", checkedOutBookId)
                .results(CheckedOutBookEntity.class);
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findByCheckOutId()");
        return checkedOutBooks.stream().filter(Objects::nonNull).findFirst().orElse(null);
    }

    @Override
    public List<CheckedOutBookDTO> findAllByStatus(final String statusId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findAll()");
        return dbFactory.getDb().sql(CHECKED_OUT_BOOKS_DATA + " where bc.checked_status_id in ("+ statusId+")").results(CheckedOutBookDTO.class);
    }

    @Override
    public List<CheckedOutBookDTO> findAllByUserIdAndStatus(long userId,final String statusId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findAll()");
        return dbFactory.getDb().sql(CHECKED_OUT_BOOKS_DATA + " where bc.user_id = ? and bc.checked_status_id in ("+ statusId+")",userId).results(CheckedOutBookDTO.class);
    }

    @Override
    public CheckedOutBookDTO findByCheckedOutBookId(long checkedOutBookId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findByCheckedOutBookId()");
        List<CheckedOutBookDTO> checkedOutBooks = dbFactory.getDb()
                .sql(CHECKED_OUT_BOOKS_DATA + " where bc.checkout_id = ?", checkedOutBookId)
                .results(CheckedOutBookDTO.class);
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findByCheckedOutBookId()");
        return checkedOutBooks.stream().filter(Objects::nonNull).findFirst().orElse(null);
    }

    @Override
    public CheckedOutBookEntity update(CheckedOutBookEntity checkedOutBook) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.update()");
        dbFactory.getDb().transaction(transactionConfig.getTransaction()).update(checkedOutBook).getRowsAffected();
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.update()");
        return checkedOutBook;
    }

    @Override
    public CheckedOutBookEntity findByCheckedOutId(final long checkedOutBookId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findByCheckedOutBookId()");
        final List<CheckedOutBookEntity> checkedOutBooks = dbFactory.getDb().where("checkout_id = ?", checkedOutBookId)
                .results(CheckedOutBookEntity.class);
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findByCheckedOutBookId()");
        return checkedOutBooks.stream().filter(Objects::nonNull).findFirst().orElse(null);
    }

    @Override
    public CheckedOutBookEntity findByInventoryId(final long inventoryId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findByInventoryId()");
        final List<CheckedOutBookEntity> checkedOutBooks = dbFactory.getDb()
                .sql(GET_INV_BOOK_CHECKOUT_STATUS, inventoryId, inventoryId).results(CheckedOutBookEntity.class);
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findByInventoryId()");
        return checkedOutBooks.stream().filter(Objects::nonNull).findFirst().orElse(null);
    }

    @Override
    public List<CheckedOutBookDTO> findAllByUserId(final long userId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findAllByUserId()");
        return dbFactory.getDb().sql(CHECKED_OUT_BOOKS_DATA + " where ud.user_id = ?", userId)
                .results(CheckedOutBookDTO.class);
    }

    @Override
    public List<CheckedOutBookDTO> findAllByUserIdAndOrderId(final long userId, final long orderId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksCheckoutRepoImpl.findAllByUserIdAndOrderId()");
        return dbFactory.getDb()
                .sql(CHECKED_OUT_BOOKS_DATA + " where ud.user_id = ? and bc.order_id=?", userId, orderId)
                .results(CheckedOutBookDTO.class);
    }

}
