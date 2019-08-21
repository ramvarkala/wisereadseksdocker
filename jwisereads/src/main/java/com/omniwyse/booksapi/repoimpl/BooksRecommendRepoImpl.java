package com.omniwyse.booksapi.repoimpl;

import static com.omniwyse.booksapi.constants.QueryConstants.BOOKS_RECOMMENDATIONS_LIST;

import java.util.List;
import java.util.Objects;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.exceptions.ConstraintViolationException;
import com.omniwyse.booksapi.utils.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.omniwyse.booksapi.db.DBFactory;
import com.omniwyse.booksapi.entity.BookRecommendationEntity;
import com.omniwyse.booksapi.repo.BooksRecommendRepo;

@Repository
public class BooksRecommendRepoImpl implements BooksRecommendRepo {

	private static final Logger LOGGER = LoggerFactory.getLogger(BooksRecommendRepoImpl.class);

	@Autowired
	private DBFactory dbFactory;

	@Autowired
	private TransactionalConfig transactionConfig;

	@Override
	public List<BookRecommendationEntity> findAll() {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksRecommendRepoImpl.findAll()");
		return dbFactory.getDb().sql(BOOKS_RECOMMENDATIONS_LIST).results(BookRecommendationEntity.class);
	}

	@Override
	public BookRecommendationEntity save(final BookRecommendationEntity bookRecommendation) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksRecommendRepoImpl.save()");
		try {
			dbFactory.getDb().transaction(transactionConfig.getTransaction()).insert(bookRecommendation).getRowsAffected();
		} catch (DbException e) {
			if (ExceptionUtils.isSqlConstraintException(e.getCause().getClass())) {
				LOGGER.error("Constraint violation exception ....");
				if (e.getMessage().contains("unique_index")) {
					throw new DbException("Book recommendation already exists...");
				} else if (e.getMessage().contains("null")) { // no need , need to handle it before service
					throw new DbException("You must enter all fields");
				}
			}
		}
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksRecommendRepoImpl.save()");
		return bookRecommendation;
	}

	@Override
	public BookRecommendationEntity findByRecommendId(final long bookRecId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksRecommendRepoImpl.find()");
		final List<BookRecommendationEntity> bookRecommendations = dbFactory.getDb()
				.where("recommend_id = ?", bookRecId).results(BookRecommendationEntity.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksRecommendRepoImpl.find()");
		return bookRecommendations.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

	@Override
	public BookRecommendationEntity update(final BookRecommendationEntity bookRecommendation) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksRecommendRepoImpl.update()");
		dbFactory.getDb().transaction(transactionConfig.getTransaction()).update(bookRecommendation).getRowsAffected();
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksRecommendRepoImpl.update()");
		return bookRecommendation;
	}

}
