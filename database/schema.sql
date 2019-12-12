DROP DATABASE IF EXISTS meatballs;

CREATE DATABASE meatballs;

USE meatballs;

CREATE TABLE dummy (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(20) NOT NULL UNIQUE,
  numero int NOT NULL,
  tipo varchar(20) NOT NULL,
  amount int NOT NULL,
  img varchar(300),
  PRIMARY KEY (ID)
);