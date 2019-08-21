package com.omniwyse.booksapi.servicesimpl;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.omniwyse.booksapi.entity.RolesEntity;
import com.omniwyse.booksapi.entity.UserCredentialsEntity;
import com.omniwyse.booksapi.entity.UserRoleMaintainEntity;
import com.omniwyse.booksapi.repo.RolesRepo;
import com.omniwyse.booksapi.repo.UserCredentialsRepo;
import com.omniwyse.booksapi.repo.UserRoleMaintainRepo;

@Service("userDetailsService")
public class MyUserDetailsServiceImpl implements UserDetailsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(MyUserDetailsServiceImpl.class);

	@Autowired
	private UserCredentialsRepo userCredentialsRepo;
	@Autowired
	private UserRoleMaintainRepo userRoleMaintainRepo;
	@Autowired
	private RolesRepo rolesRepo;

	public static Map<String, Object> cache = new HashMap<>();

	public static String currentUser = "";
	public static String currentToken = "";

	@Override
	public UserDetails loadUserByUsername(String username) {
		LOGGER.debug("Start : com.omniwyse.booksapi.servicesimpl.MyUserDetailsServiceImpl.loadUserByUsername()");
		LOGGER.debug("Verifying data base user credentials");
		String roleIds = "";
		if (username != null) {
			username = username.toLowerCase();
		}
		Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
		final UserCredentialsEntity user = userCredentialsRepo.findByUsername(username);
		List<UserRoleMaintainEntity> userRoles = null;
		List<RolesEntity> assignedRolesList = null;

		if (user != null) {
			userRoles = userRoleMaintainRepo.findByUserId(user.getUserId());
			if (userRoles != null) {
				roleIds = userRoles.stream().map(userRole -> String.valueOf(userRole.getRoleId()))
						.collect(Collectors.joining(","));
				LOGGER.debug(roleIds);
				assignedRolesList = rolesRepo.findByRoleIds(roleIds);
				grantedAuthorities = assignedRolesList.stream()
						.map(assignedRole -> new SimpleGrantedAuthority("ROLE_" + assignedRole.getRole()))
						.collect(Collectors.toSet());
				cache.put(username, grantedAuthorities);
			} else {
				LOGGER.debug("User does not exist");
				throw new UsernameNotFoundException("User does not exist");
			}
		}
		if (user != null) {
			return new User(user.getEmail(), user.getPassword(), true, true, true, true, grantedAuthorities);
		}
		LOGGER.debug("End : com.omniwyse.booksapi.servicesimpl.MyUserDetailsServiceImpl.loadUserByUsername()");
		return null;
	}
}
