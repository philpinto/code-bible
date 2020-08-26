
DROP DATABASE IF EXISTS coolWords_db;

CREATE DATABASE coolWords_db;


USE coolWords_db;


CREATE TABLE words (
  
  id INTEGER AUTO_INCREMENT NOT NULL,
  
  word VARCHAR(30) NOT NULL,
  
  coolness INTEGER(10),
  
  origin VARCHAR(30),
  
  PRIMARY KEY (id)
);


INSERT INTO words (word, coolness, origin)
VALUES ("Viper", 8, "English");

INSERT INTO words (word, coolness, origin)
VALUES ("Cannoli", 6, "Italian");

INSERT INTO words (word, coolness, origin)
VALUES ("Akimbo",7,"English");

INSERT INTO words (word, coolness, origin)
VALUES ("Treppenwitz", 9, "German");