CREATE DATABASE IF NOT EXISTS playwright_ddt;
USE playwright_ddt;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(100),
    username VARCHAR(100),
    password VARCHAR(100),
    should_pass BOOLEAN DEFAULT TRUE,
    expected_error VARCHAR(255) DEFAULT ''
);

INSERT INTO users (description, username, password, should_pass, expected_error) VALUES
('valid credentials', 'admin@gmail.com', 'admin123', TRUE, ''),
('invalid password', 'admin@ymail.com', 'wrongpass', FALSE, 'Invalid Password'),
('empty password', 'pramod@ppp.com', '', FALSE, 'Password is required'),
('empty username', '', 'admin123', FALSE, 'Email Address is required'),
('both empty', '', '', FALSE, 'Email Address is required');
