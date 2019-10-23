var mysql = require('mysql');

//initialize db connection 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_customer'  
});

var mysqlConfig = {
 dbConnection:function(excellRows){
    connection.connect(function(error){
        if(error) {
            console.log("Database is not connected.");
            return false;
        }
        let query = 'INSERT INTO customer (id, address, name, age) VALUES ?';
        connection.query(query,[excellRows],function(error, response) {
            if(error){
                console.log("Error encountered:"+' '+error);
            }
            console.log(JSON.stringify(response));
        });
    });
}
}
module.exports = mysqlConfig;