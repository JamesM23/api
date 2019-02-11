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

app.delete('/users/:id', function (req, res) {
    connection.query('DELETE from users WHERE  id = ?',
        [req.params.id], function (error, results, fields) {
            res.send(results);
            if (error) throw error.message

        });
})
app.delete('/chirps/:text', function (req, res) {
    connection.query('DELETE from chirps WHERE  text = ?',
        [req.params.id], function (error, results, fields) {
            res.send(results);
            if (error) throw error.message

        });
})

app.put('/users/:email', function (req, res) {
    connection.query('SELECT * from users', function (error, results, fields) {
        app.put('email', { name: 'Larry' }, function (err, html) {
            res.send(results);
            if (error) throw error.message
        });
    })
})

router.post("/", (req, res) => {
    let id = req.body.id
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    connection.query("INSERT INTO users (id, name, email, password) VALUES(?, ?, ?, ?)", [id, name, email, password],
        function (err, results, fields) {
            if (err) {
                connection.end();
                return console.log(err)
            }
            res.send(results)
        })
});

router.post("/", (req, res) => {
    let id = req.body.id
    let text = req.body.text
    let userid = req.body.userid
    let location = req.body.location
    connection.query("INSERT INTO chirps (id, userid, text, location) VALUES(?,?, ?, ?)", [id, userid, text, location],
        function (err, results, fields) {
            if(err) {
                connection.end();
                return console.log(err)
            }
            res.send(results)
        })
});