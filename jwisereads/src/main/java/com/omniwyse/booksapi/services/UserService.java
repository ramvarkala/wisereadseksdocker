package com.omniwyse.booksapi.services;

import java.util.List;
import java.util.Map;

import com.omniwyse.booksapi.dto.UserDetailsDTO;

public interface UserService {
	
	List<UserDetailsDTO> getUsers();

	Map<Object, Object> saveUser(UserDetailsDTO user);

	UserDetailsDTO getUser(long userId);

	Map<Object, Object> updateUser(long userId, UserDetailsDTO userData);

	Map<Object, Object> changeUserPassword(UserDetailsDTO userData);

}
