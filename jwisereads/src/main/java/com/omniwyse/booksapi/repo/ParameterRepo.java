package com.omniwyse.booksapi.repo;

import java.util.List;

import com.omniwyse.booksapi.entity.ParametersEntity;

public interface ParameterRepo {

	List<ParametersEntity> findAll();

	ParametersEntity findByParamId(long paramId);

	ParametersEntity update(ParametersEntity parameter);

	ParametersEntity save(ParametersEntity parameter);

	ParametersEntity findByParamName(String paramName);

}
