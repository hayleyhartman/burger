CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int auto_increment,
    burger_name VARCHAR(100),
    devoured boolean,
    primary key (id)
);