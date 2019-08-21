package com.omniwyse.booksapi.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="parameters")
public class ParametersEntity extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private long paramId;
	private String paramName;
	private long paramValue;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "param_id")
	public long getParamId() {
		return paramId;
	}

	public void setParamId(long paramId) {
		this.paramId = paramId;
	}

	@Column(name = "param_name")
	public String getParamName() {
		return paramName;
	}

	public void setParamName(String paramName) {
		this.paramName = paramName;
	}

	@Column(name = "param_value")
	public long getParamValue() {
		return paramValue;
	}

	public void setParamValue(long paramValue) {
		this.paramValue = paramValue;
	}

}
