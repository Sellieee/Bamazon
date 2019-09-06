DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

Use bamazon;

Create Table products
(
   item_id INT
   AUTO_INCREMENT NOT NULL,
product_name VARCHAR
   (50) NULL,
department_name VARCHAR
   (50) NULL,
price INT NULL DECIMAL(10,2),
stock_quantity INT NULL,
PRIMARY KEY
   (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES 
("Samsung Galaxy Note 10", "Mobile Phones", 1499 , 10), 
("Nikon D5600", "DSLR", 849.95, 8),
("Hikari Cichlid Gold Sinking Pellets 342g", "Pet Food", 18.49, 20),
("Nintendo Switch", "Gaming", 449, 10),
("Asus Zenbook i5", "Laptops", 1599, 7),
("Google Home", "Smart Home", 144, 30),
("Logitech G915 Gaming Keyboard", "Gaming", 399, 15),
("Logitech G502 Wireless Gaming Mouse", "Gaming", 249, 22),
("Hikari Algae Wafers 82g", "Pet Food", 33.99, 12),
("Apple iPhone XS Max", "Mobile Phones", 1799, 25);

SELECT * FROM products;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'