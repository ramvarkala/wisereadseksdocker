-- **************** USER ROLES TABLES **************************************************************************************************************************************************************************
-------roles table -----
CREATE TABLE roles(
  role_id bigint(8) NOT NULL AUTO_INCREMENT,
  role varchar(255) NOT NULL, 
  description varchar(255) NOT NULL,
  created_by varchar(255) NOT NULL, 
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (role_id),
  UNIQUE KEY name_UNIQUE (role)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

 INSERT INTO roles(role,description,created_by)
 				 VALUES("SUPER_ADMIN","Product owner","satish"),
 				 	   ("ADMIN","Admin who maintains the books","satish"),
 				 	   ("BOOK_OWNER","Owner of the books","satish"),
 				 	   ("USER","User who registers and gets the books on rental base","satish");
 -------roles table -----

 ----- user credentials table -----
CREATE TABLE user_credentials(
  user_id bigint(8) NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  status_id int(3)NOT NULL,
  created_by varchar(255) NOT NULL, 
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (user_id),
  FOREIGN KEY (status_id) REFERENCES user_status (user_status_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO user_credentials(email,password,status_id,created_by) 
					 VALUES("satish@omniwyse.com","$2a$10$sjl7.FIfHoDJNSL0vKhVUuVF2x2sW217IE3I0hLCQ2IHF4ZrifhdC",1,"satish"),
					 	   ("phaneendra@omniwyse.com","$2a$10$EHYs2DJGiYRVNHoM21eLfOq4Zgnt9RqdbNWZRuxaVNmMIgu3S04qa",1,"satish"),
					 	   ("ramakrishna@omniwyse.com","$2a$10$aCWJeRVPQEpY49eKhw4KuOdP5X6WJvghU27BRzEERbXt/jSjYfHMC",1,"satish"),
					 	   ("ramalingam@omniwyse.com","$2a$10$3kBMzzS/owtMse9tOX7R9eUWReiPRXPk4O416xFy/Y2X2qhrlx1Z.",1,"satish"),
					 	   ("guru@omniwyse.com","$2a$10$D7irLGOvfhTaFUnCKX2dpODxvIpyF84YrUZ8.8XB0vQVh4Tlebu56",1,"satish"),
					 	   ("linta@omniwyse.com","$2a$10$XE1oUUKj2ps3MAMPFuGj.uW2rvEBrSv9C8L.MhWdDLYB35JPp44yu",1,"satish"),
					 	   ("sai@omniwyse.com","$2a$10$sM9t3hnZFLMpYbhIyGtByO5ctgzXvbTBtDId6jfNysDaIFDzxTOg.",1,"satish"),
					 	   ("harish@omniwyse.com","$2a$10$dEPLYNxPxXKG/mgmco1/XOT17q29D3SMYQRsX9CowiZpTcWkOzCq6",1,"satish");
----- user credentials table -----

--- use role maintain , roles for users will be configured in this table -----
 CREATE TABLE user_role_maintain(
  user_role_id bigint(8) NOT NULL AUTO_INCREMENT,
  user_id bigint(8) NOT NULL,
  role_id bigint(8) NOT NULL,
  created_by varchar(255) NOT NULL, 
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (user_role_id),
  FOREIGN KEY (user_id) REFERENCES user_credentials (user_id),
  FOREIGN KEY (role_id) REFERENCES roles (role_id)
 )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
 
 INSERT INTO user_role_maintain(user_id,role_id,created_by)
 					   VALUES((SELECT user_id FROM user_credentials WHERE email = "satish@omniwyse.com"),(SELECT role_id FROM roles WHERE role = "ADMIN"),"satish"),
 					   ((SELECT user_id FROM user_credentials WHERE email = "harish@omniwyse.com"),(SELECT role_id FROM roles WHERE role = "ADMIN"),"harish"),
 					   ((SELECT user_id FROM user_credentials WHERE email = "satish@omniwyse.com"),(SELECT role_id FROM roles WHERE role = "SUPER_ADMIN"),"satish"),
 					   		 ((SELECT user_id FROM user_credentials WHERE email = "phaneendra@omniwyse.com"),(SELECT role_id FROM roles WHERE role = "USER"),"satish"),
 					   		 ((SELECT user_id FROM user_credentials WHERE email = "ramakrishna@omniwyse.com"),(SELECT role_id FROM roles WHERE role = "USER"),"satish"),
 					   		 ((SELECT user_id FROM user_credentials WHERE email = "ramalingam@omniwyse.com"),(SELECT role_id FROM roles WHERE role = "USER"),"satish"),
 					   		 ((SELECT user_id FROM user_credentials WHERE email = "guru@omniwyse.com"),(SELECT role_id FROM roles WHERE role = "USER"),"satish"),
 					   		 ((SELECT user_id FROM user_credentials WHERE email = "linta@omniwyse.com"),(SELECT role_id FROM roles WHERE role = "BOOK_OWNER"),"satish"),
 					   		 ((SELECT user_id FROM user_credentials WHERE email = "sai@omniwyse.com"),(SELECT role_id FROM roles WHERE role = "BOOK_OWNER"),"satish");
 	
--- use role maintain , roles for users will be configured in this table -----	

------- users details configure table -----
CREATE TABLE user_details(
  user_reg_id bigint(8) NOT NULL AUTO_INCREMENT,
  user_id bigint(8) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) default NULL,
  email varchar(255) NOT NULL,
  address varchar(500) NOT NULL,
  contact_number bigint(20) NOT NULL,
  gender_id int(2) not null,
  company_name varchar(255) default NULL,
  date_of_birth date default NULL,
  user_status_id int(3) NOT NULL,
  created_by varchar(255) NOT NULL, 
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (user_reg_id),
  FOREIGN KEY (user_id) REFERENCES user_credentials (user_id),
  FOREIGN KEY (user_status_id) REFERENCES user_status (user_status_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO user_details(user_id,first_name,last_name,email,contact_number,address,company_name,date_of_birth,gender_id,user_status_id,created_by) 
					 VALUES((SELECT user_id FROM user_credentials WHERE email = "harish@omniwyse.com"),"harish","yadav","harish@omniwyse.com",9632587412,"secunderabad,sitafalmandi,h.no 4-545","abc","2005-05-20",1,1,"satish"),
					 ((SELECT user_id FROM user_credentials WHERE email = "phaneendra@omniwyse.com"),"phaneendra","Chittiprolu","phaneendra@omniwyse.com",9563963114,"Hyderabad,Hitech city,h.no 10-95-4/12","abc","2005-05-20",1,1,"satish");

------- users details configure table -----


					 
	 
 -- ***************************************** Users TABLE ************************************************************************************************************************************************************

 		 
 					   		 
 					   		 