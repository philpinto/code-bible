DROP DATABASE IF EXISTS greatbayDB;

CREATE DATABASE greatbayDB;

USE greatbayDB;

CREATE TABLE auction (
  id INT NOT NULL AUTO_INCREMENT,
  product VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
  PRIMARY KEY (id)
);