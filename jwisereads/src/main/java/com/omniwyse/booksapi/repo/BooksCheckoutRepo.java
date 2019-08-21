package com.omniwyse.booksapi.repo;

import java.util.List;

import com.omniwyse.booksapi.dto.CheckedOutBookDTO;
import com.omniwyse.booksapi.entity.CheckedOutBookEntity;

public interface BooksCheckoutRepo {

	List<CheckedOutBookDTO> findAll();

	CheckedOutBookEntity save(CheckedOutBookEntity checkedOutBook);

	CheckedOutBookDTO findByCheckedOutBookId(long checkedOutBookId);

	CheckedOutBookEntity update(CheckedOutBookEntity checkedOutBook);

	CheckedOutBookEntity findByCheckedOutId(long checkedOutBookId);

	List<CheckedOutBookDTO> findAllByUserId(long userId);

	List<CheckedOutBookDTO> findAllByUserIdAndOrderId(long userId, long orderId);

	CheckedOutBookEntity findByInventoryId(long inventoryId);

	CheckedOutBookEntity findByCheckOutId(long checkedOutBookId);

    List<CheckedOutBookDTO> findAllByStatus(String statusId);

    List<CheckedOutBookDTO> findAllByUserIdAndStatus(long userId, String statusId);
}
