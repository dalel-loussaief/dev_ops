CREATE DATABASE IF NOT EXISTS appdb;
USE appdb;

CREATE TABLE IF NOT EXISTS sample_table (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  value VARCHAR(200)
);

INSERT INTO sample_table (name, value) VALUES
('ligne1', 'valeur1'),
('ligne2', 'valeur2');