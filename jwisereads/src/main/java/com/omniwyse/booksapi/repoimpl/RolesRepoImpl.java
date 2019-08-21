package com.omniwyse.booksapi.repoimpl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.omniwyse.booksapi.db.DBFactory;
import com.omniwyse.booksapi.entity.RolesEntity;
import com.omniwyse.booksapi.repo.RolesRepo;

@Repository
public class RolesRepoImpl implements RolesRepo {

	private static final Logger LOGGER = LoggerFactory.getLogger(RolesRepoImpl.class);

	@Autowired
	DBFactory dbFactory;

	@Override
	public List<RolesEntity> findByRoleIds(final String roleIds) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.UserRoleMaintainRepoImpl.findByUserId()");
		return dbFactory.getDb().where("role_id in (" + roleIds + ")").results(RolesEntity.class);
	}

}
