var mysql = require("mysql");
var inquirer = require("inquirer");

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
   inquirerStart();
});

function showInventory() {
   connection.query("SELECT * FROM products", function (error, response) {
      if (error) throw error;
      for (var i = 0; i < response.length; i++) {
         console.log(response[i].item_id + ". " + response[i].product_name + " | " + response[i].department_name + " | $" + response[i].price);
         console.log("---------------------------------");
      }
   });
};

function inquirerStart() {
   connection.query("SELECT * FROM products", function (error, response) {
      if (error) throw error;
      inquirer.prompt([{
            name: "selectedItemID",
            type: "rawlist",
            choices: function () {
               var arrayChoice = [];
               for (var i = 0; i < response.length; i++) {
                  arrayChoice.push(response[i].product_name);
               }
               return arrayChoice;
            },
            message: "Which item would you like to purchase?"
         },
         {
            name: "amount",
            type: "input",
            message: "How many would you like to purchase?"
         }
      ]).then

      (function (answer) {
         var selectedItem;
         for (var i = 0; i < response.length; i++) {
            if (response[i].product_name === answer.selectedItemID) {
               selectedItem = response[i];
            }
         };
         if (selectedItem.stock_quantity < answer.amount) {
            connection.query("UPDATE products SET ? WHERE ?", [{
               stock_quantity: selectedItem.stock_quantity - answer.amount
            }, {
               item_id: selectedItem.item_id
            }], function (error) {
               if (error) throw error;
               console.log("Your order has been successfully placed");
               console.log("---------------------------------");
               inquirerStart();
            })
            console.log("Your total purchases is: $" + selectedItem.price * answer.amount)
            console.log("---------------------------------");
         } else {
            console.log("Sorry, you've cleared out our shop, please come back later.")
            console.log("---------------------------------");
            inquirerStart();
         }
      })
   })
}