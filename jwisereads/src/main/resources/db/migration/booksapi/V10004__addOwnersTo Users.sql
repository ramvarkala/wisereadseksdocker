INSERT INTO user_details(user_id, first_name, last_name, email, contact_number, address, company_name, date_of_birth,
                         gender_id, user_status_id, created_by)
VALUES ((SELECT user_id FROM user_credentials WHERE email = "linta@omniwyse.com"), "linta", "choudary",
        "linta@omniwyse.com", 9632587412, "secunderabad,sitafalmandi,h.no 4-545", "abc", "2005-05-20", 1, 1, "satish"),
       ((SELECT user_id FROM user_credentials WHERE email = "sai@omniwyse.com"), "sai", "sai", "sai@omniwyse.com",
        9563963114, "Hyderabad,Hitech city,h.no 10-95-4/12", "abc", "2005-05-20", 1, 1, "satish"),
       ((SELECT user_id FROM user_credentials WHERE email = "satish@omniwyse.com"), "Satish", "Podaralla",
        "satish@omniwyse.com", 9632587412,
        "secunderabad,sitafalmandi,h.no 4-545", "abc", "2005-05-20", 1, 1, "satish");

ALTER TABLE books_info
    DROP FOREIGN KEY books_info_ibfk_1;
update books_info set owner_id=8;
ALTER TABLE `books_info`
    ADD CONSTRAINT books_info_ibfk_1 FOREIGN KEY (owner_id) REFERENCES user_details (user_id);

ALTER TABLE books_inventory
    DROP FOREIGN KEY books_inventory_ibfk_2;
update books_inventory set owner_id=8;
ALTER TABLE `books_inventory`
    ADD CONSTRAINT books_inventory_ibfk_2 FOREIGN KEY (owner_id) REFERENCES user_details (user_id);

ALTER TABLE books_checkout_details
    ADD amount_paid DECIMAL(10, 2);


create table roles_status
(
    role_status_id int(3)    NOT NULL AUTO_INCREMENT,
    role_status    varchar(300) not null,
    created_by     varchar(300) not null,
    created_on     timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    modified_on    timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    PRIMARY KEY (role_status_id)
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = latin1;

insert into roles_status (role_status, created_by)
values ('Active', 'satish'),
       ('In Active', 'satish');

alter table user_role_maintain
    add column role_status int(3) not null after role_id;
update user_role_maintain
set role_status=1;
ALTER TABLE `user_role_maintain`
    ADD CONSTRAINT user_role_maintain_ibfk_3 FOREIGN KEY (role_status) REFERENCES roles_status (role_status_id);

update user_role_maintain
set role_status=1
where created_by in ('satish', 'harish');

INSERT INTO roles(role,description,created_by)
VALUES("AGENT","Who delivers the books to customers","satish");

ALTER TABLE `user_role_maintain` ADD UNIQUE `unique_index`(`user_id`, `role_id`);