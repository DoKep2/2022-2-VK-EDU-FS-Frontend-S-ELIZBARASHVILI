DROP USER IF EXISTS 'test_back';
CREATE USER 'test_back' IDENTIFIED BY 'back_test';
GRANT ALL PRIVILEGES ON * . * to 'test_back';
DROP database IF EXISTS lerochka;
CREATE database lerochka;
USE lerochka;
CREATE TABLE `test_users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `username` varchar(16) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
FLUSH PRIVILEGES;
CREATE TABLE `test_dialogs` (
    `id` int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`)
);