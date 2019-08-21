package com.omniwyse.booksapi.db;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.dieselpoint.norm.Transaction;

@Component
public class TransactionalConfig {

	private Transaction transaction = null;

	@Autowired
	private DBFactory dbFactory;

	private void setTransaction(Transaction transaction) {
		this.transaction = transaction;
	}

	public Transaction getTransaction() {
		return this.transaction;
	}

	private SqlDatabase getBooksDb() {
		return dbFactory.getDb();
	}

	public void startTransaction(){
		setTransaction(getBooksDb().startTransaction());
	}

	public void commit(){
		getTransaction().commit();
		setTransaction(null);
	}

	public void rollBack(){
		getTransaction().rollback();
		setTransaction(null);
	}

}
