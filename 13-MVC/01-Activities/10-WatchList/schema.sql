DROP DATABASE IF EXISTS moviePlanner_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE moviePlanner_db;

USE moviePlanner_db;

-- Create the table plans.
CREATE TABLE moviePlanner (
  id int NOT NULL AUTO_INCREMENT,
  movie varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO moviePlanner (movie) VALUES ('Deuce Bigalow: Male Gigolo');