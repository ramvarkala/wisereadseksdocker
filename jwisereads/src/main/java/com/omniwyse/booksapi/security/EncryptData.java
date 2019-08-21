package com.omniwyse.booksapi.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class EncryptData {

	public static final int rounds = 10;
	public static final BCryptPasswordEncoder ENCODER = new BCryptPasswordEncoder();

	public static String encryptData(String value) {
		String encodedValue = null;
		int i = 0;
		while (i < rounds) {
			encodedValue = ENCODER.encode(value);
			i++;
		}
		return encodedValue;
	}

}
