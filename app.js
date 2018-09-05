
var express = require('express');
var mysql = require('mysql');
var app = express();

    app.get('/', (req, res) => {
        res.send('Hello world!');
        var conn = mysql.createConnection({
            host: localhost,
            database: mix,
            password:''
        });
        conn.createQuery('', ) // query sql
    });

    app.listen(3000, () => {
        console.log('Example port 3000!');
    })