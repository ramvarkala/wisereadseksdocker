package com.omniwyse.booksapi.db;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
@Component
public class DBConnectionProperties {

	private final String user;
	private final String password;
	private final String host;
	private final String port;

	@Autowired
	public DBConnectionProperties(Environment environment) {
		// To get the the system variables for db connection
		this.host = System.getProperty("books_api_db_host", environment.getProperty("books_api_db_host"));
		this.port = System.getProperty("books_api_db_port", environment.getProperty("books_api_db_port"));
		this.user = System.getProperty("books_api_db_user", environment.getProperty("books_api_db_user"));
		this.password = System.getProperty("books_api_db_password", environment.getProperty("books_api_db_password"));
	}

	public String getUser() {
		return user;
	}

	public String getPassword() {
		return password;
	}

	public String getHost() {
		return host;
	}

	public String getPort() {
		return port;
	}

	
	
}
