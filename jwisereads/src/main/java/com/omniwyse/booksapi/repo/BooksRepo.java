package com.omniwyse.booksapi.repo;

import com.omniwyse.booksapi.dto.BookDTO;
import com.omniwyse.booksapi.dto.BookDetailsDTO;
import com.omniwyse.booksapi.entity.BookEntity;

import java.util.List;

public interface BooksRepo {

	List<BookDTO> findAll();

	BookEntity save(BookEntity book);

	BookEntity findByBookId(long bookId);

	BookEntity update(BookEntity book);
	
	BookEntity findByTitle(String title);

	List<BookDTO> findAllByTitle(String title);
	
	List<BookDTO> findAllByBookIds(String bookIds);

	BookDetailsDTO findDetailsByBookId(final long bookId);
	
}
