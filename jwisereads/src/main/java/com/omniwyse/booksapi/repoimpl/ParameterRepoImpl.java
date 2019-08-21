package com.omniwyse.booksapi.repoimpl;

import static com.omniwyse.booksapi.constants.QueryConstants.PARAMETERS_LIST;

import java.util.List;
import java.util.Objects;

import com.omniwyse.booksapi.db.TransactionalConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.omniwyse.booksapi.db.DBFactory;
import com.omniwyse.booksapi.entity.ParametersEntity;
import com.omniwyse.booksapi.repo.ParameterRepo;

@Repository
public class ParameterRepoImpl implements ParameterRepo {

	private static final Logger LOGGER = LoggerFactory.getLogger(BooksRepoImpl.class);

	@Autowired
	private DBFactory dbFactory;

	@Autowired
	private TransactionalConfig transactionConfig;

	@Override
	public List<ParametersEntity> findAll() {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.ParameterRepoImpl.findAll()");
		return dbFactory.getDb().sql(PARAMETERS_LIST).results(ParametersEntity.class);
	}

	@Override
	public ParametersEntity findByParamId(long paramId) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.ParameterRepoImpl.findByParamId()");
		List<ParametersEntity> parameters = dbFactory.getDb().where("param_id = ?", paramId)
				.results(ParametersEntity.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.ParameterRepoImpl.findByParamId()");
		return parameters.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

	@Override
	public ParametersEntity findByParamName(String paramName) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.ParameterRepoImpl.findByParamName()");
		List<ParametersEntity> parameters = dbFactory.getDb().where("param_name = ?", paramName)
				.results(ParametersEntity.class);
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.ParameterRepoImpl.findByParamName()");
		return parameters.stream().filter(Objects::nonNull).findFirst().orElse(null);
	}

	@Override
	public ParametersEntity save(final ParametersEntity parameter) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.ParameterRepoImpl.save()");
		dbFactory.getDb().transaction(transactionConfig.getTransaction()).insert(parameter).getRowsAffected();
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.ParameterRepoImpl.save()");
		return parameter;
	}

	@Override
	public ParametersEntity update(final ParametersEntity parameter) {
		LOGGER.debug("Start : com.omniwyse.booksapi.repoimpl.ParameterRepoImpl.update()");
		dbFactory.getDb().transaction(transactionConfig.getTransaction()).update(parameter).getRowsAffected();
		LOGGER.debug("End : com.omniwyse.booksapi.repoimpl.ParameterRepoImpl.update()");
		return parameter;
	}

}
