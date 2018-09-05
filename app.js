
var express = require('express');
var mysql = require('mysql');
var app = express();

    app.get('/getTeste', (req, res) => {
        res.send('Hello world!');
    });
    app.post('/postTeste', (req, res) => {
        res.send('Got a POST request');
    });
    app.put('/putTeste', (req, res) => {
        res.send('Got a PUT request');
    });
    app.delete('/deleteTeste', (req, res) => {
        res.send('Got a DELETE request');
    });

    app.listen(3000, () => {
        console.log('Example port 3000!');
    })