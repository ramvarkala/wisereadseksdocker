package com.omniwyse.booksapi.repo;

import java.util.List;

import com.omniwyse.booksapi.dto.UserDetailsDTO;
import com.omniwyse.booksapi.entity.UserDetailsEntity;

public interface UserDetailsRepo {
	
	List<UserDetailsDTO> findAll();

	UserDetailsEntity save(UserDetailsEntity userDetails);

	UserDetailsEntity findByUserId(long userId);

	UserDetailsEntity update(UserDetailsEntity userDetails);

	UserDetailsDTO findUserDetailsByUserId(long userId);



}
