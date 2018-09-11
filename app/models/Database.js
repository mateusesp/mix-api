var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    database : 'learncode', 
    user : 'root',
    password : ''
});

exports.connection = connection;