const mysql = require('mysql');

const con = mysql.createConnection({
    host: "nodemanta.cafe24app.com",
    user: "nodemanta",
    password: "Dlwlrgkwk1!",
    database: "nodemanta"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con