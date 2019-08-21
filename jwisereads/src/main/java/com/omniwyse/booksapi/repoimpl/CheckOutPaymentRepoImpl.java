package com.omniwyse.booksapi.repoimpl;

import static com.omniwyse.booksapi.constants.QueryConstants.CHECKOUT_PAYMENTS_LIST;

import java.util.List;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.omniwyse.booksapi.db.DBFactory;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.entity.CheckOutPaymentEntity;
import com.omniwyse.booksapi.repo.CheckOutPaymentRepo;

@Repository
public class CheckOutPaymentRepoImpl implements CheckOutPaymentRepo {

	private static final Logger LOGGER = LoggerFactory.getLogger(CheckOutPaymentRepoImpl.class);

	@Autowired
	private DBFactory dbFactory;

	@Autowired
	private TransactionalConfig transactionConfig;

	@Override
	public List<CheckOutPaymentEntity> findAll() {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.CheckOutPaymentRepoImpl.findAll()");
		return dbFactory.getDb().sql(CHECKOUT_PAYMENTS_LIST).results(CheckOutPaymentEntity.class);
	}

	@Override
	public CheckOutPaymentEntity save(final CheckOutPaymentEntity checkOutpayment) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.CheckOutPaymentRepoImpl.save()");
		dbFactory.getDb().transaction(transactionConfig.getTransaction()).insert(checkOutpayment).getRowsAffected();
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.CheckOutPaymentRepoImpl.save()");
		return checkOutpayment;
	}

	@Override
	public CheckOutPaymentEntity findByPaymentId(final long orderId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.CheckOutPaymentRepoImpl.findByPaymentId()");
		final List<CheckOutPaymentEntity> checkOutpayments = dbFactory.getDb().where("order_id = ?", orderId)
				.results(CheckOutPaymentEntity.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.CheckOutPaymentRepoImpl.findByPaymentId()");
		return checkOutpayments.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

	@Override
	public CheckOutPaymentEntity update(final CheckOutPaymentEntity checkOutpayment) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.CheckOutPaymentRepoImpl.update()");
		//dbFactory.getDb().transaction(transactionConfig.getTransaction()).update(checkOutpayment).getRowsAffected();
		dbFactory.getDb().transaction(transactionConfig.getTransaction()).update(checkOutpayment).getRowsAffected();
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.CheckOutPaymentRepoImpl.update()");
		return checkOutpayment;
	}

}
