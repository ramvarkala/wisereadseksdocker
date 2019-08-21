package com.omniwyse.booksapi.repoimpl;

import static com.omniwyse.booksapi.constants.QueryConstants.GET_USER_ROLES_DATA;

import java.util.List;
import java.util.Objects;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.utils.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.omniwyse.booksapi.db.DBFactory;
import com.omniwyse.booksapi.dto.UserRoleMaintainDTO;
import com.omniwyse.booksapi.entity.UserRoleMaintainEntity;
import com.omniwyse.booksapi.repo.UserRoleMaintainRepo;

@Repository
public class UserRoleMaintainRepoImpl implements UserRoleMaintainRepo {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserRoleMaintainRepoImpl.class);

	@Autowired
	DBFactory dbFactory;

	@Autowired
	private TransactionalConfig transactionConfig;

	@Override
	public List<UserRoleMaintainEntity> findByUserId(final long userId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.UserRoleMaintainRepoImpl.findByUserId()");
		final List<UserRoleMaintainEntity> userRoles = dbFactory.getDb().where("user_id=?", userId)
				.results(UserRoleMaintainEntity.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.UserRoleMaintainRepoImpl.findByUserId()");
		return userRoles;
	}

	@Override
	public UserRoleMaintainEntity save(final UserRoleMaintainEntity userRoleMaintain) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.UserRoleMaintainRepoImpl.save()");
		try {
			dbFactory.getDb().transaction(transactionConfig.getTransaction()).insert(userRoleMaintain);
		}catch (DbException e){
			if (ExceptionUtils.isSqlConstraintException(e.getCause().getClass())) {
				LOGGER.error("Constraint violation exception ....",e);
				if (e.getMessage().contains("unique_index")) {
					throw new DbException("Role already exists to the user.");
				}
			}
		}
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.UserRoleMaintainRepoImpl.save()");
		return userRoleMaintain;
	}

	@Override
	public UserRoleMaintainEntity update(UserRoleMaintainEntity userRoleMaintain) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.UserRoleMaintainRepoImpl.update()");
		dbFactory.getDb().transaction(transactionConfig.getTransaction()).update(userRoleMaintain);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.UserRoleMaintainRepoImpl.update()");
		return userRoleMaintain;
	}

	@Override
	public List<UserRoleMaintainDTO> findRolesByUserId(long userId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.UserRoleMaintainRepoImpl.findByUserId()");
		final List<UserRoleMaintainDTO> userRoles = dbFactory.getDb().sql(GET_USER_ROLES_DATA+" where um.user_id=?", userId)
				.results(UserRoleMaintainDTO.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.UserRoleMaintainRepoImpl.findByUserId()");
		return userRoles;
	}

	@Override
	public UserRoleMaintainEntity findByUserIdAndRoleId(long userId, long roleId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.UserRoleMaintainRepoImpl.findByUserIdAndRoleId()");
		final List<UserRoleMaintainEntity> userRoles = dbFactory.getDb().where("user_id=? and role_id=?", userId,roleId)
				.results(UserRoleMaintainEntity.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.UserRoleMaintainRepoImpl.findByUserIdAndRoleId()");
		return userRoles.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

}
