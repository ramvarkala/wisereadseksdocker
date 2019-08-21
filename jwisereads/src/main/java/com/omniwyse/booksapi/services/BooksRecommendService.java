package com.omniwyse.booksapi.services;

import java.util.List;
import java.util.Map;

import com.omniwyse.booksapi.dto.BookRecommendationDTO;
import com.omniwyse.booksapi.entity.BookRecommendationEntity;

public interface BooksRecommendService {
	
	List<BookRecommendationEntity> getBooksRecommendations();

	Map<Object, Object> saveBookRecommendation(final BookRecommendationDTO bookRecDetails);

	BookRecommendationEntity getBookRecommendation(final long bookRecId);

	Map<Object, Object> updateBookRecommendation(final long bookRecId, BookRecommendationDTO bookRecDetails);

	Map<Object,Object> getCategoryWiseBooksRec();

}
