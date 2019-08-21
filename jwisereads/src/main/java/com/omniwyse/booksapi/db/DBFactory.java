package com.omniwyse.booksapi.db;

import static com.omniwyse.booksapi.constants.AppConstants.BOOKS_DB_SCHEMA;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.dieselpoint.norm.Database;

@Component
public class DBFactory {
	private static final Logger LOGGER = LoggerFactory.getLogger(DBFactory.class);
	private final SqlDatabase booksDb;
	private final DBConnectionProperties dbProperties;

	@Autowired
	public DBFactory(DBConnectionProperties dbConnProps) {
		this.dbProperties = dbConnProps;
		System.setProperty("norm.jdbcUrl", dbUrl(BOOKS_DB_SCHEMA));
		System.setProperty("norm.user", dbConnProps.getUser());
		System.setProperty("norm.password", dbConnProps.getPassword());
		this.booksDb = new SqlDatabase();
		LOGGER.debug("Books api database has been created");
	}

	public SqlDatabase getDb() {
		return booksDb;
	}

	private String dbUrl(String schema) {
		return "jdbc:mysql://" + dbProperties.getHost() + ":" + dbProperties.getPort() + "/" + schema + "?useSSL=false";
	}

}
