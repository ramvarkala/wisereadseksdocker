----------------books Owners table ---------------
CREATE TABLE books_owners(
  owner_id bigint(8) NOT NULL AUTO_INCREMENT,
  user_id bigint(8) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  address varchar(500) NOT NULL,
  contact_number bigint(20) NOT NULL,
  gender_id int(8) not null,
  status_id int(3) NOT NULL,
  company_name varchar(255) default NULL,
  date_of_birth date default NULL,
  created_by varchar(255) NOT NULL, 
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (owner_id),
  FOREIGN KEY (user_id) REFERENCES user_credentials (user_id),
  FOREIGN KEY (status_id) REFERENCES user_status (user_status_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO books_owners(user_id,first_name,last_name,email,contact_number,address,company_name,date_of_birth,gender_id,status_id,created_by) 
					 VALUES((SELECT user_id FROM user_credentials WHERE email = "linta@omniwyse.com"),"linta","choudary","linta@omniwyse.com",9632587412,"secunderabad,sitafalmandi,h.no 4-545","abc","2005-05-20",1,1,"satish"),
					 ((SELECT user_id FROM user_credentials WHERE email = "sai@omniwyse.com"),"sai","sai","sai@omniwyse.com",9563963114,"Hyderabad,Hitech city,h.no 10-95-4/12","abc","2005-05-20",1,1,"satish");
---- End of owner tables -----
------ start Books details -----

CREATE TABLE books_info(
	book_id bigint(8) NOT NULL AUTO_INCREMENT,
	title varchar(500) NOT NULL,
	author varchar(500) NOT NULL,
	genre_id bigint(8) NOT NULL,
	isbn_code varchar(150) DEFAULT NULL,
	edition varchar(150) DEFAULT NULL,
	year date DEFAULT NULL,
	book_cover_page varchar(150) DEFAULT NULL,
  	sample_page_url varchar(150) DEFAULT NULL,
  	images_url1 varchar(150) DEFAULT NULL,
  	images_url2 varchar(150) DEFAULT NULL,  
 	book_condition varchar(150) DEFAULT NULL,
  	book_price decimal(10,2) DEFAULT NULL,
  	book_description varchar(2000) DEFAULT NULL,
  	demand bigint(8) DEFAULT NULL,
  	number_of_pages bigint(8) DEFAULT NULL,
  	product_group bigint(8) DEFAULT NULL,
  	publication_date date,
  	base_rental_value decimal(10,2) DEFAULT NULL,
  	rent_per_day decimal(10,2) DEFAULT NULL,
  	rent_per_week decimal(10,2) DEFAULT NULL,
  	rent_per_month decimal(10,2) DEFAULT NULL,
	publisher varchar(500) NOT NULL,
	stock bigint(8) not null,
	owner_id bigint(8) NOT NULL,
	created_by varchar(500) NOT NULL,
	created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	PRIMARY KEY (book_id),
	FOREIGN KEY (owner_id) REFERENCES books_owners (owner_id)
	
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

---insert into books_info(title,author,genre_id,isbn_code,edition,year,book_cover_page,sample_page_url,
---images_url1,images_url2,book_condition,book_price,book_description,demand,number_of_pages,product_group,publication_date,base_rental_value,
---rent_per_day,rent_per_week,rent_per_month,publisher,stock,owner_id,created_by) 
---values ("The Secret","Rhonda bhorne",1,"secret12","1st edition","2005-05-20","No cover","sample","url1","Url2","Available",500,"Motivational book",1,245,
---1,"2015--05-20",15,10,70,300,"rhonda publisher",3,1,"Harish"),
---("The Jungle Book","Rudyard Kipling",1,"secret12","2nd edition","2005-05-20","No cover","sample","url1","Url2","Available",500,"On a warm evening in the Seeonee hills,",1,245,
----1,"2015-05-20",12,10,70,300,"rhonda publisher",2,1,"Harish");
-------End of books details ----
					 
					 
			

----------- Influencers list -------------

create table influencers(
	influencer_id bigint(8) not null auto_increment,
	influencer_name varchar(300) not null,
	created_by varchar(300) not null,
	created_on timestamp(3) not null default current_timestamp(3),
	modified_on timestamp(3) not null default current_timestamp(3) on update current_timestamp(3),
	primary key (influencer_id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

insert into influencers(influencer_name,created_by) values ("bill gates","satish"),("mark zukerburg","satish"),("jack maa","satish");

----------- Books inventory ---------
create table books_inventory(
  inventory_id bigint(8) NOT NULL AUTO_INCREMENT,
  book_id bigint(8) NOT NULL,
  owner_id bigint(8) DEFAULT NULL,
  availability_id bigint(8) DEFAULT NULL,
  available_Date date,
  buy_flag boolean,
  rent_flag boolean,  
  where_is_the_book varchar(150) DEFAULT NULL, 
  recommended_by bigint(8) default null,
  location_id bigint(8) DEFAULT NULL,
  created_by varchar(300) not null,
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  FOREIGN KEY (book_id) REFERENCES books_info(book_id),
  FOREIGN KEY (owner_id) REFERENCES books_owners(owner_id),
  FOREIGN KEY (availability_id) REFERENCES books_status(availability_id),
  PRIMARY KEY (inventory_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


------Books checkout payment details ------

create table order_payment_details(
 order_id bigint(8) NOT NULL AUTO_INCREMENT,
  total_order_amount  decimal(10,2) not null,
  advance_paid  decimal(10,2) DEFAULT null,
  due_amount  decimal(10,2) DEFAULT null,
  total_amount_paid  decimal(10,2) DEFAULT null,
  amount_due_flag boolean, 
  created_by varchar(300) not null,
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (order_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

----End of Books checkout payment details ------

----------Books checkout details ----------
create table books_checkout_details(
  checkout_id bigint(8) NOT NULL AUTO_INCREMENT,
  order_id bigint(8) not null,
  book_id bigint(8) not null,
  inventory_id bigint(8) not null,
  user_id bigint(8) not null,
  checked_out_date date not null,
  total_amount  decimal(10,2) not null, 
  exp_return_date date not null,
  checked_status_id bigint(8) not null,
  returned_date date default null,
  book_condition_id bigint(5) not null,
  penalty decimal(10,2) default null,
  notes varchar(1000) default null,
  created_by varchar(300) not null,
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (checkout_id),
  FOREIGN KEY (order_id) REFERENCES order_payment_details(order_id),
  FOREIGN KEY (checked_status_id) REFERENCES book_checked_status(checked_status_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

------------ BOOKS RECOMMENDATIONS DETAILS ----------

create table books_recommendations(
  recommend_id bigint(8) NOT NULL AUTO_INCREMENT,
  book_id bigint(8) not null,
  influencer_id bigint(8) not null,
  created_by varchar(300) not null,
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (recommend_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


------ unique constraints ---
ALTER TABLE `books_info` ADD UNIQUE `unique_index`(`title`, `edition`);
ALTER TABLE `books_recommendations` ADD UNIQUE `unique_index`(`book_id`, `influencer_id`);
--ALTER TABLE `books_grade_recommendations` ADD UNIQUE `unique_index`(`bookid`, `gradeid`);
--ALTER TABLE `books_classroom_inventory` ADD UNIQUE `unique_index`(`bookid`, `gradeid`,`classroom_id`,`book_inventory_id`);
--ALTER TABLE `books_student_assign` ADD UNIQUE `unique_index`(`bookid`, `sid`);






