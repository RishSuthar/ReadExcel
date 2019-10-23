var readXlsxFile  = require('read-excel-file/node');
var mysql = require('./mysqlConfig.js');

readXlsxFile('customers.xlsx').then(function(rows) {
    mysql.dbConnection(rows);
});