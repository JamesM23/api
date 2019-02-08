const express = require('express');
const path = require('path');
let mysql = require('mysql');
// this part creates an instance of the express package and sets it to a variable called app.
const app = express();
// setting the port to a variable for ease of use.
const port = '3000';

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BeGre@t2019',
    database: 'chirpr'
});

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

app.get('/', function (req, res) {
    res.send('GET request to homepage');
});
/////////////////Get All Chirps////////////////
app.get('/chirps', function (req, res) {
    connection.query('SELECT * from chirps', function (error, results, fields) {
        res.send(results);
        if (error) throw error.message;
    });
})
app.get('/chirps/:id', function (req, res) {
    connection.query('SELECT * from chirps WHERE  id = ? ',
        [req.params.id], function (error, results, fields) {
            if (error) throw error.message
            res.send(results);
        })
})
app.get('/users', function (req, res) {
    connection.query('SELECT * from users',
        function (error, results, fields) {
            if (error) throw error.message;
            res.send(results);
        })
})
app.get('/users/:id', function (req, res) {
    connection.query('SELECT * from users WHERE  id = ?',
        [req.params.id], function (error, results, fields) {
            res.send(results);
            if (error) throw error.message

        })
})
app.delete('/', function (req, res) {
    res.send('DELETE request to homepage');
});
app.delete('/users/:id', function (req, res) {
    connection.query('DELETE from users WHERE  id = ?',
        [req.params.id], function (error, results, fields) {
            res.send(results);
            if (error) throw error.message

        });
})

