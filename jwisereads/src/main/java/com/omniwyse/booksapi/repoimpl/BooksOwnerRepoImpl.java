package com.omniwyse.booksapi.repoimpl;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.db.DBFactory;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.entity.BookOwnerEntity;
import com.omniwyse.booksapi.exceptions.ConstraintViolationException;
import com.omniwyse.booksapi.repo.BooksOwnerRepo;
import com.omniwyse.booksapi.utils.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;

import static com.omniwyse.booksapi.constants.QueryConstants.BOOKS_OWNERS_LIST;

@Repository
public class BooksOwnerRepoImpl implements BooksOwnerRepo {
    private static final Logger LOGGER = LoggerFactory.getLogger(BooksOwnerRepoImpl.class);

    @Autowired
    private DBFactory dbFactory;

    @Autowired
    private TransactionalConfig transactionConfig;

    @Override
    public List<BookOwnerEntity> findAll() {
        LOGGER.debug("Start :  com.omniwyse.booksapi.repoimpl.BooksOwnerRepoImpl.findAll()");
        return dbFactory.getDb().sql(BOOKS_OWNERS_LIST).results(BookOwnerEntity.class);
    }

    @Override
    public BookOwnerEntity save(final BookOwnerEntity owner) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksOwnerRepoImpl.save()");
        try {
            dbFactory.getDb().transaction(transactionConfig.getTransaction()).insert(owner).getRowsAffected();
        } catch (DbException e) {
            if (ExceptionUtils.isSqlConstraintException(e.getCause().getClass())) {
                LOGGER.error("Constraint violation exception ....");
                if (e.getMessage().contains("unique_index")) {
                    throw new DbException("Owner already exists");
                } else if (e.getMessage().contains("null")) { // no need , need to handle it before service
                    throw new DbException("You must enter all fields");
                }
            }
        }
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksOwnerRepoImpl.save()");
        return owner;
    }

    @Override
    public BookOwnerEntity findByOwnerId(final long ownerId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksOwnerRepoImpl.find()");
        final List<BookOwnerEntity> owners = dbFactory.getDb().where("owner_id = ?", ownerId).results(BookOwnerEntity.class);
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksOwnerRepoImpl.find()");
        return owners.stream().filter(Objects::nonNull).findFirst().orElse(null);
    }

    @Override
    public BookOwnerEntity findByUserId(final long userId) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksOwnerRepoImpl.findByUserId()");
        List<BookOwnerEntity> owners = dbFactory.getDb().where("user_id = ?", userId).results(BookOwnerEntity.class);
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksOwnerRepoImpl.findByUserId()");
        return owners.stream().filter(Objects::nonNull).findFirst().orElse(null);
    }

    @Override
    public BookOwnerEntity update(final BookOwnerEntity owner) {
        LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksOwnerRepoImpl.update()");
        dbFactory.getDb().transaction(transactionConfig.getTransaction()).update(owner).getRowsAffected();
        LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksOwnerRepoImpl.update()");
        return owner;
    }

}
