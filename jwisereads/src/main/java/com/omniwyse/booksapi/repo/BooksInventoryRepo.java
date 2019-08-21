package com.omniwyse.booksapi.repo;

import java.util.List;

import com.omniwyse.booksapi.dto.BooksInventoryDTO;
import com.omniwyse.booksapi.entity.BooksInventoryEntity;

public interface BooksInventoryRepo {
	
	List<BooksInventoryDTO> findAll();

	BooksInventoryEntity save(BooksInventoryEntity bookRecommendation);

	BooksInventoryEntity findByBookInvId(long bookId);

	BooksInventoryEntity update(BooksInventoryEntity bookRecommendation);

}
