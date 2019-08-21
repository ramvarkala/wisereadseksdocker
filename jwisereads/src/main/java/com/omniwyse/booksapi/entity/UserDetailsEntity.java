package com.omniwyse.booksapi.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Table(name = "user_details")
public class UserDetailsEntity extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private long userRegId;
	private long userId;
	private String firstName;
	private String lastName;
	private String email;
	private String address;
	private long contactNumber;
	private int genderId;
	private int userStatusId;
	private String password;
	private String companyName;
	private Date dateOfBirth;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
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

}
