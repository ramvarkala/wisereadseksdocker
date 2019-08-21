package com.omniwyse.booksapi.services;

import java.util.Map;

import com.omniwyse.booksapi.entity.UserCredentialsEntity;

public interface LoginService {

	Map<Object, Object> validateLogin(UserCredentialsEntity user);

}
