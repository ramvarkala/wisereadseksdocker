package com.omniwyse.booksapi.services;

import java.util.List;
import java.util.Map;

import com.omniwyse.booksapi.dto.BooksInventoryDTO;
import com.omniwyse.booksapi.entity.BooksInventoryEntity;

public interface BooksInventoryService {

	List<BooksInventoryDTO> getInventoryBooks();

	Map<Object, Object> saveInventoryBook(BooksInventoryDTO bookInventoryDetails);

	BooksInventoryEntity getInventoryBook(long bookInvId);

	Map<Object, Object> updateInventoryBook(long bookInvId, BooksInventoryDTO bookInventoryDetails);

}
