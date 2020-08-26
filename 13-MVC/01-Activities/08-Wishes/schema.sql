DROP DATABASE IF EXISTS wishes_db;

-- Create the database wishes_db and specified it for use.
CREATE DATABASE wishes_db;

USE wishes_db;

-- Create the table tasks.
CREATE TABLE wishes (
  id int NOT NULL AUTO_INCREMENT,
  wish varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO wishes (wish) VALUES ('Bigger pet chicken.');
INSERT INTO wishes (wish) VALUES ('Longer 9 iron.');
INSERT INTO wishes (wish) VALUES ('Huge chungus.');
