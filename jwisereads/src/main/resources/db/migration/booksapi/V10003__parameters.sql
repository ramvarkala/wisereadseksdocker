create table parameters(
  param_id int(8) NOT NULL AUTO_INCREMENT,
  param_name varchar(300) not null,
  param_value  bigint(8) not null,
  created_by varchar(300) not null,
  created_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  modified_on timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (param_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

insert into parameters(param_name,param_value,created_by) values ('max_checkout_books',2,'satish');

ALTER TABLE `books_checkout_details` ADD CONSTRAINT fk_inventory_id FOREIGN KEY (inventory_id) REFERENCES books_inventory(inventory_id);
ALTER TABLE `books_checkout_details` ADD CONSTRAINT fk_book_id FOREIGN KEY (book_id) REFERENCES books_inventory(book_id);

alter table user_details modify column created_by varchar(255) default null;