CREATE DATABASE IF NOT EXISTS fitofan;

USE fitofan;

CREATE TABLE organization_package_category_names (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
)

CREATE TABLE organization_packages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2048) NOT NULL,
    price DECIMAL(13, 4) NOT NULL
)

CREATE TABLE organization_package_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    organization_package_id INT NOT NULL,
    organization_package_category_name_id INT NOT NULL,
    FOREIGN KEY (organization_package_id) REFERENCES organization_packages(id),
    FOREIGN KEY (organization_package_category_name_id) REFERENCES organization_package_category_names(id)
)