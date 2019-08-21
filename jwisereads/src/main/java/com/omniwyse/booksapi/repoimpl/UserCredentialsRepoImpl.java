package com.omniwyse.booksapi.repoimpl;

import java.util.List;
import java.util.Objects;

import com.omniwyse.booksapi.db.TransactionalConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.omniwyse.booksapi.db.DBFactory;
import com.omniwyse.booksapi.entity.UserCredentialsEntity;
import com.omniwyse.booksapi.repo.UserCredentialsRepo;

@Repository
public class UserCredentialsRepoImpl implements UserCredentialsRepo {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserCredentialsRepoImpl.class);

	@Autowired
	DBFactory dbFactory;

	@Autowired
	private TransactionalConfig transactionConfig;

	@Override
	public UserCredentialsEntity findByUsername(final String username) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.UserCredentialsRepoImpl.findByUsername()");
		final List<UserCredentialsEntity> userList = dbFactory.getDb().where("email=?", username)
				.results(UserCredentialsEntity.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.UserCredentialsRepoImpl.findByUsername()");
		return userList.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

	@Override
	public UserCredentialsEntity findByUserId(final long userId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.UserCredentialsRepoImpl.findByUsername()");
		final List<UserCredentialsEntity> userList = dbFactory.getDb().where("user_id=?", userId)
				.results(UserCredentialsEntity.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.UserCredentialsRepoImpl.findByUsername()");
		return userList.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

	@Override
	public UserCredentialsEntity findByUsernameAndPass(final String username, final String password) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.UserCredentialsRepoImpl.findByUsernameAndPass()");
		final List<UserCredentialsEntity> userList = dbFactory.getDb()
				.where("email=? and password=?", username, password).results(UserCredentialsEntity.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.UserCredentialsRepoImpl.findByUsernameAndPass()");
		return userList.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

	@Override
	public UserCredentialsEntity save(final UserCredentialsEntity userCredentials) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.UserCredentialsRepoImpl.save()");
		dbFactory.getDb().transaction(transactionConfig.getTransaction()).insert(userCredentials);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.UserCredentialsRepoImpl.save()");
		return userCredentials;
	}

	@Override
	public UserCredentialsEntity update(final UserCredentialsEntity userCredentials) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repo.UserDetailsRepoImpl.update()");
		dbFactory.getDb().transaction(transactionConfig.getTransaction()).update(userCredentials).getRowsAffected();
		LOGGER.debug("End : com.omniwyse.booksapi.repo.UserDetailsRepoImpl.update()");
		return userCredentials;
	}

}
