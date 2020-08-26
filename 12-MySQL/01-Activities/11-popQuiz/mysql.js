var mysql = require("mysql");

console.table

var connection = mysql.createConnection({
    host: "localhost",
  
    
    port: 3306,
  
    
    user: "root",
  
    
    password: "password",
    database: "coolWords_DB"
  });


connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    
  });