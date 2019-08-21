package com.omniwyse.booksapi.repo;

import java.util.List;

import com.omniwyse.booksapi.entity.BookRecommendationEntity;

public interface BooksRecommendRepo {
	
	List<BookRecommendationEntity> findAll();

	BookRecommendationEntity save(BookRecommendationEntity bookRecommendation);

	BookRecommendationEntity findByRecommendId(long bookId);

	BookRecommendationEntity update(BookRecommendationEntity bookRecommendation);

}
