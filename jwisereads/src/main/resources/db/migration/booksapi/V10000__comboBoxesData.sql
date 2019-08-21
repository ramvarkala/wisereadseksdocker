----Gender table ------

create table gender(
  gender_id int(8) NOT NULL AUTO_INCREMENT,
  gender varchar(300) not null,
  created_by varchar(300) not null,
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (gender_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

insert into gender(gender,created_by) values("Male","satish"),("Female","satish");

---- end of gender table ----

----User status table ---

CREATE TABLE user_status(
  user_status_id int(3) NOT NULL AUTO_INCREMENT,
  status varchar(150) NOT NULL,
  created_by varchar(255) NOT NULL, 
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (user_status_id),
  UNIQUE KEY name_UNIQUE (status)
 )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO user_status(status,created_by)
			VALUES("Active","satish"),
				  ("InActive","satish"),
			 	  ("Pending","satish");
			 	  
----User status table ---

------ Tables for books ---

---book condition -----
create table book_condition(
	condtion_id bigint(8) NOT NULL AUTO_INCREMENT,
	book_condition varchar(150) NOT NULL,
 	PRIMARY KEY (condtion_id)
);

INSERT INTO book_condition (book_condition) VALUES ('On time');
INSERT INTO book_condition (book_condition) VALUES ('On time and damaged');
INSERT INTO book_condition (book_condition) VALUES ('Late');
INSERT INTO book_condition (book_condition) VALUES ('Late and damaged');

---book condition -----

--- book checked status ---

create table book_checked_status(
	checked_status_id bigint(8) NOT NULL AUTO_INCREMENT,
	checked_status varchar(150) NOT NULL,
 	PRIMARY KEY (checked_status_id)
);

INSERT INTO book_checked_status (checked_status) VALUES ('Ready for delivery');
INSERT INTO book_checked_status (checked_status) VALUES ('Checked out');
INSERT INTO book_checked_status (checked_status) VALUES ('Ready to pick up');
INSERT INTO book_checked_status (checked_status) VALUES ('Checked in');

--- book checked status ---

---- book genre table ------

create table book_genre(
	genre_id bigint(8) NOT NULL AUTO_INCREMENT,
	genre varchar(150) NOT NULL,
 	PRIMARY KEY (genre_id)
);

INSERT INTO book_genre (genre) VALUES ('Story');
INSERT INTO book_genre (genre) VALUES ('Comedy');
INSERT INTO book_genre (genre) VALUES ('Science Fiction');

---- book genre table ------

------ books availability status -----
create table books_status(
  availability_id bigint(8) NOT NULL AUTO_INCREMENT,
  availability varchar(300) not null,
  created_by varchar(300) not null,
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (availability_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

insert into books_status(availability,created_by) values ("Yes","satish"),("No","satish");

---- book availability status -----




------ end of books tables ----