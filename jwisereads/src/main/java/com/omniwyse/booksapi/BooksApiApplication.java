package com.omniwyse.booksapi;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

//@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@SpringBootApplication
@EnableScheduling
public class BooksApiApplication {
	private static final Logger LOGGER = LoggerFactory.getLogger(BooksApiApplication.class);

	public static void main(String[] args) {
		LOGGER.info("Starting book api .....");
		SpringApplication.run(BooksApiApplication.class, args);
	}
}
