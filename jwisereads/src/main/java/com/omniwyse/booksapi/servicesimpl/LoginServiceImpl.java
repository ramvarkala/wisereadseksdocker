package com.omniwyse.booksapi.servicesimpl;

import static com.omniwyse.booksapi.commons.ExceptionMessagesKeys.USER_NOT_FOUND;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omniwyse.booksapi.commons.ValidationMessages;
import com.omniwyse.booksapi.dto.UserDetailsDTO;
import com.omniwyse.booksapi.entity.UserCredentialsEntity;
import com.omniwyse.booksapi.exceptions.UserNotFoundException;
import com.omniwyse.booksapi.repo.UserCredentialsRepo;
import com.omniwyse.booksapi.repo.UserDetailsRepo;
import com.omniwyse.booksapi.repo.UserRoleMaintainRepo;
import com.omniwyse.booksapi.services.LoginService;

@Service
public class LoginServiceImpl implements LoginService {

	private static final Logger LOGGER = LoggerFactory.getLogger(LoginServiceImpl.class);

	private UserCredentialsRepo userCredentialsRepo;
	private UserRoleMaintainRepo userRoleMaintainRepo;
	private UserDetailsRepo userDetailsRepo;
	private ValidationMessages validationMessages;

	@Autowired
	public LoginServiceImpl(UserCredentialsRepo userCredentialsRepo, UserRoleMaintainRepo userRoleMaintainRepo,
			UserDetailsRepo userDetailsRepo, ValidationMessages validationMessages) {
		this.userCredentialsRepo = userCredentialsRepo;
		this.userRoleMaintainRepo = userRoleMaintainRepo;
		this.userDetailsRepo = userDetailsRepo;
		this.validationMessages = validationMessages;
	}

	@Override
	public Map<Object, Object> validateLogin(UserCredentialsEntity user) {
		LOGGER.debug("Start : com.omniwyse.booksapi.resources.LoginServiceImpl.validateLogin()");
		final Map<Object, Object> response = new HashMap<>();
		if (user.getEmail() != null) {
			user.setEmail(user.getEmail().toLowerCase());
			final UserCredentialsEntity userDetails = userCredentialsRepo.findByUsername(user.getEmail());
			if (userDetails != null) {
				final UserDetailsDTO userData = userDetailsRepo.findUserDetailsByUserId(userDetails.getUserId());
				if (userData != null) {
					userData.setUserRoles(userRoleMaintainRepo.findRolesByUserId(userDetails.getUserId()));
				}
				response.put("userDetails", userData);
			} else {
				throw new UserNotFoundException(validationMessages.getExceptionMessage(USER_NOT_FOUND));
			}
		} else {
			throw new UserNotFoundException(validationMessages.getExceptionMessage(USER_NOT_FOUND));
		}
		LOGGER.debug("End : com.omniwyse.booksapi.resources.LoginServiceImpl.validateLogin()");
		return response;
	}

}
