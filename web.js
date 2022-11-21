const express = require('express');
const app = express();
// const port = 8001;
const port = 80;
// const con = require('./dbConnnection');
const axios = require('axios');
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('HELLO HEEJIN!! HELLOE HEEJIN!! HEELELEL awelkawe erlkwerl');
});

app.get('/test', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.json({name:"devmanta"});
});

// app.get('/db', (req, res) => {
//     const params = req.query;
//     con.query("select * from test where name = ?", params.name, function (err, result) {
//         if (err) {
//             throw err;
//         }
//         res.header('Content-Type', 'application/json');
//         res.json(result);
//     });
    
//     con.end();    
// });

app.get('/cafe24', (req, res) => {
	axios.get("http://devmanta.cafe24.com/test")
    	.then((response) => {
            const{data} = response;
        	res.json(response.data);
        })
        .catch((error) => {
        	res.json(error);
        })
});

app.get('/.well-known/pki-validation/94BA84BED0F78FC2535B9D873A91BAF0.txt', (req, res) => {
    try {
        // const data = fs.readFileSync('94BA84BED0F78FC2535B9D873A91BAF0.txt', 'ascii')
        const data = fs.readFileSync('/home/hosting_users/nodemanta/apps/nodemanta_nodemanta/94BA84BED0F78FC2535B9D873A91BAF0.txt', 'ascii')
        console.log(data);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
});

app.get('/img', function (req, res) {
    res.sendFile('/Users/heejin/Personal-heejin/promotion-node/1.png');
});
app.get('/img2', function (req, res) {
    res.sendFile('/home/hosting_users/nodemanta/apps/nodemanta_nodemanta/1.png');
});
app.get('/img3', function (req, res) {
    res.sendFile('./1.png');
});
// app.get('/insert', (req, res) => {
//     const queryString = req.query;
//     const params = [queryString.no, queryString.name];
//     con.query("insert into test(no, name) values(?, ?)", params, function (err, result) {
//         if (err) {
//             throw err;
//         }
//         res.header('Content-Type', 'application/json');
//         res.json(result);
//     });
    
//     con.end();    
// });

app.listen(port, ()=> {
    console.log('server is listening...');
});