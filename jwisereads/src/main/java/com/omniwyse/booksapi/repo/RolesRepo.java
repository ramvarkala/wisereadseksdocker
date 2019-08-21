package com.omniwyse.booksapi.repo;

import java.util.List;

import com.omniwyse.booksapi.entity.RolesEntity;

public interface RolesRepo {
	
	List<RolesEntity> findByRoleIds(String roleIds);

	
	
}
