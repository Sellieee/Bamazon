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
price INT NULL,
stock_quantity INT NULL,
PRIMARY KEY
   (item_id)
);

   SELECT *
   FROM products