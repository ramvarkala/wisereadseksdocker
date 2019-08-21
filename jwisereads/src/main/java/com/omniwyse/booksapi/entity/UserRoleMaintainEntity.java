package com.omniwyse.booksapi.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "user_role_maintain")
public class UserRoleMaintainEntity extends BaseEntity {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long userRoleId;
	private long userId;
	private long roleId;
	private int roleStatus;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="user_role_id")
	public long getUserRoleId() {
		return userRoleId;
	}

	public void setUserRoleId(long useRoleId) {
		this.userRoleId = useRoleId;
	}

	@Column(name="user_id")
	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	@Column(name="role_id")
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
