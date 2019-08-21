package com.omniwyse.booksapi.repo;

import java.util.List;

import com.omniwyse.booksapi.entity.CheckOutPaymentEntity;

public interface CheckOutPaymentRepo {
	
	List<CheckOutPaymentEntity> findAll();

	CheckOutPaymentEntity save(CheckOutPaymentEntity checkOutpayment);

	CheckOutPaymentEntity findByPaymentId(long orderId);

	CheckOutPaymentEntity update(CheckOutPaymentEntity checkOutpayment);

}
