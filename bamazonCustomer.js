var mysql = require("mysql");

var connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "root",
   database: "bamazon"
});

connection.connect(function (error) {
   if (error) throw error;
   console.log("Connected as ID: " + connection.threadId);
   showInventory();
});

function showInventory() {
   connection.query("SELECT * FROM products", function (error, response) {
      if (error) throw error;
      console.log(response);
      connection.end();
   });
}