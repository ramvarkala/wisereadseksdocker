package com.omniwyse.booksapi.db;

import java.sql.SQLException;

import javax.sql.DataSource;

import com.dieselpoint.norm.Database;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public class SqlDatabase extends Database{
	
	private static final int NUM_OF_MAX_CONNECTIONS = 7;
	
	protected DataSource getDataSource() throws SQLException {
		HikariConfig config = new HikariConfig();
		config.setMaximumPoolSize(NUM_OF_MAX_CONNECTIONS);
		config.setConnectionTimeout(60000);
		config.setMinimumIdle(2);
		config.setIdleTimeout(60000);
		//config.setMaxLifetime(60000);
		
		String dataSourceClassName = System.getProperty("norm.dataSourceClassName");
		if (dataSourceClassName != null) {
			config.setDataSourceClassName(dataSourceClassName);
		}
		
		String driverClassName = System.getProperty("norm.driverClassName");
		if (driverClassName != null) {
			config.setDriverClassName(driverClassName);
		}
		
		String jdbcUrl = System.getProperty("norm.jdbcUrl");
		if (jdbcUrl != null) {
			config.setJdbcUrl(jdbcUrl);
		}

		addConfigProperty(config, "serverName", System.getProperty("norm.serverName"));
		addConfigProperty(config, "databaseName", System.getProperty("norm.databaseName"));
		addConfigProperty(config, "user", System.getProperty("norm.user"));
		addConfigProperty(config, "password", System.getProperty("norm.password"));

		return new HikariDataSource(config);
	}
	
	private void addConfigProperty(HikariConfig config, String name, String value) {
		if (value != null) {
			config.addDataSourceProperty(name, value);
		}
	}

}
