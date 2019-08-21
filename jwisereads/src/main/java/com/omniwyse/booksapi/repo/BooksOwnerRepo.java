package com.omniwyse.booksapi.repo;

import java.util.List;

import com.omniwyse.booksapi.entity.BookOwnerEntity;

public interface BooksOwnerRepo {

	List<BookOwnerEntity> findAll();

	BookOwnerEntity save(BookOwnerEntity owner);

	BookOwnerEntity findByOwnerId(long ownerId);

	BookOwnerEntity update(BookOwnerEntity owner);

	BookOwnerEntity findByUserId(long userId);

}
