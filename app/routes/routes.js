const express = require('express');
var mysql = require('mysql');
var database = require('../models/Database').connection;
var router = express.Router();

router.get('/servicos', (req, res) => {
    res.send('Hello world!');
    database.query('SELECT * FROM tb_servicos', (err, result) => {
        if (err) throw err;
        let json = JSON.parse(JSON.stringify(result));
        console.dir(json);
    })
});

exports.router = router;