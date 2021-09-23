create database api;
DROP TABLE IF EXISTS user;
create table user(
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(50) DEFAULT NULL,
  is_deleted tinyint(1) DEFAULT 0,

);



