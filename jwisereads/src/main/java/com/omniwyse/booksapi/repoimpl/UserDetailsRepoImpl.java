package com.omniwyse.booksapi.repoimpl;

import static com.omniwyse.booksapi.constants.QueryConstants.USERS_LIST;

import java.util.List;
import java.util.Objects;

import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.dto.UserDetailsDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.omniwyse.booksapi.db.DBFactory;
import com.omniwyse.booksapi.entity.UserDetailsEntity;
import com.omniwyse.booksapi.repo.UserDetailsRepo;

@Repository
public class UserDetailsRepoImpl implements UserDetailsRepo {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserDetailsRepoImpl.class);

	@Autowired
	private DBFactory dbFactory;

	@Autowired
	private TransactionalConfig transactionConfig;

	@Override
	public List<UserDetailsDTO> findAll() {
		LOGGER.debug("Start :  com.omniwyse.booksapi.repo.UserDetailsRepoImpl.findAll()");
		return dbFactory.getDb().sql(USERS_LIST).results(UserDetailsDTO.class);
	}

	@Override
	public UserDetailsEntity save(final UserDetailsEntity user) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repo.UserDetailsRepoImpl.save()");
		dbFactory.getDb().transaction(transactionConfig.getTransaction()).insert(user).getRowsAffected();
		LOGGER.debug("End : com.omniwyse.booksapi.repo.UserDetailsRepoImpl.save()");
		return user;
	}

	@Override
	public UserDetailsEntity findByUserId(final long userId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repo.UserDetailsRepoImpl.find()");
		final List<UserDetailsEntity> users = dbFactory.getDb().where("user_id = ?", userId)
				.results(UserDetailsEntity.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repo.UserDetailsRepoImpl.find()");
		return users.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

	@Override
	public UserDetailsEntity update(final UserDetailsEntity user) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repo.UserDetailsRepoImpl.update()");
		dbFactory.getDb().transaction(transactionConfig.getTransaction()).update(user).getRowsAffected();
		LOGGER.debug("End : com.omniwyse.booksapi.repo.UserDetailsRepoImpl.update()");
		return user;
	}

	@Override
	public UserDetailsDTO findUserDetailsByUserId(long userId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repo.UserDetailsRepoImpl.findUserDetailsByUserId()");
		final List<UserDetailsDTO> users = dbFactory.getDb().sql(USERS_LIST+" where user_id = ?", userId)
				.results(UserDetailsDTO.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repo.UserDetailsRepoImpl.findUserDetailsByUserId()");
		return users.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

}
