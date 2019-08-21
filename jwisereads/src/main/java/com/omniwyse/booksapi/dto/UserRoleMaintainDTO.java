package com.omniwyse.booksapi.dto;

import javax.persistence.Column;

public class UserRoleMaintainDTO extends BaseDTO {
	
	private long userRoleId;
	private long userId;
	private long roleId;
	private String roleName;
	private int roleStatus;

	@Column(name = "role_name")
	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	@Column(name = "user_role_id")
	public long getUserRoleId() {
		return userRoleId;
	}

	public void setUserRoleId(long useRoleId) {
		this.userRoleId = useRoleId;
	}

	@Column(name = "user_id")
	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	@Column(name = "role_id")
	public long getRoleId() {
		return roleId;
	}

	public void setRoleId(long roleId) {
		this.roleId = roleId;
	}

	@Column(name = "role_status")
	public int getRoleStatus() {
		return roleStatus;
	}

	public void setRoleStatus(int roleStatus) {
		this.roleStatus = roleStatus;
	}

}
