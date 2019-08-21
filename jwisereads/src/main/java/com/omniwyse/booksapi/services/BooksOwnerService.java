package com.omniwyse.booksapi.services;

import java.util.List;
import java.util.Map;

import com.omniwyse.booksapi.dto.BookOwnerDTO;
import com.omniwyse.booksapi.entity.BookOwnerEntity;

public interface BooksOwnerService {

	List<BookOwnerEntity> getOwners();

	Map<Object,Object> saveOwner(BookOwnerDTO owner);

	BookOwnerEntity getOwner(long ownerId);

	Map<Object, Object> updateOwner(long ownerId, BookOwnerDTO ownerData);
	
}
