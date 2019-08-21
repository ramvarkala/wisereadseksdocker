package com.omniwyse.booksapi.repo;

import com.omniwyse.booksapi.entity.UserCredentialsEntity;

public interface UserCredentialsRepo {

	UserCredentialsEntity save(UserCredentialsEntity userCredentials);

	UserCredentialsEntity findByUsername(String username);

	UserCredentialsEntity update(final UserCredentialsEntity userCredentials);

	UserCredentialsEntity findByUsernameAndPass(final String username,final String password);

	public UserCredentialsEntity findByUserId(final long userId);

}
