package com.omniwyse.booksapi.dto;

import java.sql.Timestamp;
import java.util.Map;

import javax.persistence.Column;

public class BaseDTO {

	private Timestamp createdOn;
	private Timestamp modifiedOn;
	private String createdBy;
	private Map<Object,Object> errors = null;

	@Column(name = "created_on")
	public Timestamp getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Timestamp createdOn) {
		this.createdOn = createdOn;
	}

	@Column(name = "modified_on")
	public Timestamp getModifiedOn() {
		return modifiedOn;
	}

	public void setModifiedOn(Timestamp modifiedOn) {
		this.modifiedOn = modifiedOn;
	}

	@Column(name = "created_by")
	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Map<Object, Object> getErrors() {
		return errors;
	}

	public void setErrors(Map<Object, Object> errors) {
		this.errors = errors;
	}
}
