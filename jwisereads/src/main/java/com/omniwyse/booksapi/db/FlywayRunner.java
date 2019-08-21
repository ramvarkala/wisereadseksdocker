package com.omniwyse.booksapi.db;

import java.sql.SQLException;

import org.flywaydb.core.Flyway;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import static com.omniwyse.booksapi.constants.AppConstants.BOOKS_DB_SCHEMA;

@Component
public class FlywayRunner {

	private static final Logger LOGGER = LoggerFactory.getLogger(FlywayRunner.class);

	private final String jdbcUrl;
	private final String user;
	private final String password;

	@Autowired
	public FlywayRunner(DBConnectionProperties dbConnProps) {
		this.jdbcUrl = "jdbc:mysql://" + dbConnProps.getHost() + ":" + dbConnProps.getPort()
				+ "/%s?createDatabaseIfNotExist=true";
		this.user = dbConnProps.getUser();
		this.password = dbConnProps.getPassword();
		this.migrate();
	}

	public void migrate() {
		Flyway flyway = new Flyway();
		flyway.setLocations("db/migration/booksapi");
		flyway.setDataSource(String.format(jdbcUrl, BOOKS_DB_SCHEMA), user, password, "USE " + BOOKS_DB_SCHEMA);
		flyway.migrate();
		try {
			flyway.getDataSource().getConnection().close();
		} catch (SQLException e) {
			LOGGER.debug("Exception occured while closing the flyway datasource " + e);
		}
	}

}
