const express = require('express');
const app = express();
const port = 3000;
const con = require('./dbConnnection');

app.get('/', (req, res) => {
    res.send('HELLO HEEJIN!! HELLOE HEEJIN!! HEELELEL awelkawe erlkwerl');
});

app.get('/test', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.json({name:"devmanta"});
});

app.get('/db', (req, res) => {
    const params = req.query;
    con.query("select * from test where name = ?", params.name, function (err, result) {
        if (err) {
            throw err;
        }
        res.header('Content-Type', 'application/json');
        res.json(result);
    });
    
    con.end();    
});

app.get('/insert', (req, res) => {
    const queryString = req.query;
    const params = [queryString.no, queryString.name];
    con.query("insert into test(no, name) values(?, ?)", params, function (err, result) {
        if (err) {
            throw err;
        }
        res.header('Content-Type', 'application/json');
        res.json(result);
    });
    
    con.end();    
});

app.listen(port, ()=> {
    console.log('server is listening...');
});