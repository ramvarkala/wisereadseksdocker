package com.omniwyse.booksapi.repoimpl;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.db.DBFactory;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.dto.BookDTO;
import com.omniwyse.booksapi.dto.BookDetailsDTO;
import com.omniwyse.booksapi.entity.BookEntity;
import com.omniwyse.booksapi.repo.BooksRepo;
import com.omniwyse.booksapi.utils.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;

import static com.omniwyse.booksapi.constants.QueryConstants.BOOKS_LIST_DATA;
import static com.omniwyse.booksapi.constants.QueryConstants.BOOKS_META_DATA;

@Repository
public class BooksRepoImpl implements BooksRepo {
	private static final Logger LOGGER = LoggerFactory.getLogger(BooksRepoImpl.class);

	@Autowired
	private DBFactory dbFactory;

	@Autowired
	private TransactionalConfig transactionConfig;

	@Override
	public List<BookDTO> findAll() {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.findAll()");
		return dbFactory.getDb().sql(BOOKS_META_DATA).results(BookDTO.class);
	}

	@Override
	public BookEntity save(final BookEntity book) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.save()");
		try {
			dbFactory.getDb().transaction(transactionConfig.getTransaction()).insert(book).getRowsAffected();
		} catch (DbException e) {
			if (ExceptionUtils.isSqlConstraintException(e.getCause().getClass())) {
				LOGGER.error("Constraint violation exception ....",e);
				if (e.getMessage().contains("unique_index")) {
					throw new DbException("Book already exists...");
				} else if (e.getMessage().contains("null")) { // no need , need to handle it before service
					throw new DbException("You must enter all fields");
				}
			}
		}
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.save()");
		return book;
	}

	@Override
	public BookEntity update(BookEntity book) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.update()");
		dbFactory.getDb().transaction(transactionConfig.getTransaction()).update(book).getRowsAffected();
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.update()");
		return book;
	}

	@Override
	public BookEntity findByBookId(final long bookId) {
 		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.find()");
		List<BookEntity> books = dbFactory.getDb().where("book_id = ?", bookId).results(BookEntity.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.find()");
		return books.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

	@Override
	public BookDetailsDTO findDetailsByBookId(final long bookId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.findDetailsByBookId()");
		List<BookDetailsDTO> books = dbFactory.getDb().sql(BOOKS_LIST_DATA + " where bi.book_id= ?",bookId)
				.results(BookDetailsDTO.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.findDetailsByBookId()");
		return books.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

	@Override
	public BookEntity findByTitle(final String title) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.findByTitle()");
		final List<BookEntity> books = dbFactory.getDb().where("title = ?", title).results(BookEntity.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.findByTitle()");
		return books.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

	@Override
	public List<BookDTO> findAllByTitle(final String title) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.findAllByTitle()");
		final List<BookDTO> books = dbFactory.getDb().sql(BOOKS_LIST_DATA + " WHERE bi.title LIKE '%" + title + "%'")
				.results(BookDTO.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.findAllByTitle()");
		return books;
	}

	@Override
	public List<BookDTO> findAllByBookIds(final String bookIds) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.BooksRepositoryImpl.findAllByBookIds()");
		return dbFactory.getDb().sql(BOOKS_LIST_DATA + " where bi.book_id in (" + bookIds + ")").results(BookDTO.class);
	}

}
