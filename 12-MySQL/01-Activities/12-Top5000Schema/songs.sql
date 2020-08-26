DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE songs (
  position INT NOT NULL,
  artist VARCHAR(45) NULL,
  title VARCHAR(45) NULL,
  year INTEGER,
  overPop DECIMAL(10,4),
  usPop DECIMAL(10,4),
  ukPop DECIMAL(10,4),
  eurPop Decimal(10,4),
  otherPop Decimal(10,4),
  PRIMARY KEY (position)
);

