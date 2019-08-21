package com.omniwyse.booksapi.services;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.omniwyse.booksapi.dto.BookDetailsDTO;
import org.springframework.web.multipart.MultipartFile;

import com.omniwyse.booksapi.dto.BookDTO;
import com.omniwyse.booksapi.entity.BookEntity;

public interface BooksService {
	
	Map<Object, Object> getBooks();

	Map<Object, Object> saveBook(BookDTO bookDetails);

	Map<Object, Object> getBook(long bookId);

	Map<Object, Object> updateBook(long bookId, BookDTO bookDetails);

	Map<Object, Object> uploadBooksFile(@Valid @NotNull MultipartFile file) throws IOException;

	Map<Object, Object> searchBooks(String title);

	Map<Object, Object> getBookDetailsById(final long bookId);

}
