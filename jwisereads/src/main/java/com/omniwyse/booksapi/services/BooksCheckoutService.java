package com.omniwyse.booksapi.services;

import com.omniwyse.booksapi.dto.CheckOutPaymentDTO;
import com.omniwyse.booksapi.dto.CheckedOutBookDTO;
import com.omniwyse.booksapi.entity.CheckOutPaymentEntity;
import com.omniwyse.booksapi.entity.CheckedOutBookEntity;

import java.util.List;
import java.util.Map;

public interface BooksCheckoutService {

    Map<Object, Object> saveCheckedOutBooks(CheckOutPaymentDTO checkOutPayment);

    Map<Object, Object> updateCheckedOutBook(long orderId, CheckOutPaymentDTO checkOutPayment);

    CheckedOutBookDTO getCheckedOutBook(long checkedOutBookId);

    List<CheckedOutBookDTO> getCheckedOutBooks();

    CheckOutPaymentEntity calculateOrderDetails(CheckOutPaymentDTO checkOutPaymentDetails);

    Map<Object, Object> calculateNewOrderDetails(CheckOutPaymentDTO checkOutPaymentDetails);

    Map<Object, Object> calculateExistingOrderDetails(CheckOutPaymentDTO checkOutPaymentDetails);

    Map<Object, Object> updateTheBookStatus(CheckedOutBookDTO checkOutBookDetails);

    List<CheckedOutBookDTO> getCheckedOutBooks(long userId);

    List<CheckedOutBookDTO> getCheckedOutBooksByStatus(String statusId);

    List<CheckedOutBookDTO> getUserCheckedOutBooksByStatus(long userId, String statusId);

    CheckedOutBookEntity calculateRentAmountOfBook(final CheckedOutBookDTO checkedOutBookDetails);
}
