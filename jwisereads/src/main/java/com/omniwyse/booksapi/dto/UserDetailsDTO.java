package com.omniwyse.booksapi.dto;

import static com.omniwyse.booksapi.commons.ValidationKeys.ACTIVE_STATUS;
import static com.omniwyse.booksapi.commons.ValidationKeys.ADDRESS;
import static com.omniwyse.booksapi.commons.ValidationKeys.CAN_NOT_BE_EMPTY;
import static com.omniwyse.booksapi.commons.ValidationKeys.CAN_NOT_BE_NULL;
import static com.omniwyse.booksapi.commons.ValidationKeys.CONTACT_NUMBER;
import static com.omniwyse.booksapi.commons.ValidationKeys.EMAIL;
import static com.omniwyse.booksapi.commons.ValidationKeys.FIRST_NAME;
import static com.omniwyse.booksapi.commons.ValidationKeys.GENDER;
import static com.omniwyse.booksapi.commons.ValidationKeys.PSWD;
import static com.omniwyse.booksapi.commons.ValidationKeys.ROLE;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class UserDetailsDTO extends BaseDTO {

	private long userRegId;
	private long userId;

	@NotNull(message = FIRST_NAME + CAN_NOT_BE_EMPTY)
	@NotEmpty(message = FIRST_NAME + CAN_NOT_BE_NULL)
	private String firstName;
	private String lastName;

	@NotNull(message = EMAIL + CAN_NOT_BE_EMPTY)
	@NotEmpty(message = EMAIL + CAN_NOT_BE_NULL)
	@Email(message = "Please provide valid email")
	private String email;

	@NotNull(message = ADDRESS + CAN_NOT_BE_EMPTY)
	@NotEmpty(message = ADDRESS + CAN_NOT_BE_NULL)
	private String address;

	@Min(value = 1L, message = CONTACT_NUMBER + CAN_NOT_BE_EMPTY)
	private long contactNumber;

	@Min(value = 1, message = GENDER + CAN_NOT_BE_EMPTY)
	private int genderId;

	@Min(value = 1, message = ACTIVE_STATUS + CAN_NOT_BE_EMPTY)
	private int userStatusId;

	@NotNull(message = PSWD + CAN_NOT_BE_EMPTY)
	@NotEmpty(message = PSWD + CAN_NOT_BE_NULL)
	private String password;
	private String companyName;
	private Date dateOfBirth;
	@Min(value = 1, message = ROLE + CAN_NOT_BE_EMPTY)
	private long roleId;
	private String oldPassword;
	private List<UserRoleMaintainDTO> userRoles;

	@Column(name = "user_reg_id")
	public long getUserRegId() {
		return userRegId;
	}

	public void setUserRegId(long userRegId) {
		this.userRegId = userRegId;
	}

	@Column(name = "first_name")
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	@Column(name = "last_name")
	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	@Column(name = "email")
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "address")
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Column(name = "contact_number")
	public long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}

	@Column(name = "gender_id")
	public int getGenderId() {
		return genderId;
	}

	public void setGenderId(int genderId) {
		this.genderId = genderId;
	}

	@Column(name = "user_status_id")
	public int getUserStatusId() {
		return userStatusId;
	}

	public void setUserStatusId(int userStatusId) {
		this.userStatusId = userStatusId;
	}

	@Column(name = "user_id")
	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	@Transient
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name = "company_name")
	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	@Column(name = "date_of_birth")
	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateofBirth) {
		this.dateOfBirth = dateofBirth;
	}

	public long getRoleId() {
		return roleId;
	}

	public void setRoleId(long roleId) {
		this.roleId = roleId;
	}

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public List<UserRoleMaintainDTO> getUserRoles() {
		return userRoles;
	}

	public void setUserRoles(List<UserRoleMaintainDTO> userRoles) {
		this.userRoles = userRoles;
	}

}
