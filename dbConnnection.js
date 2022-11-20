const mysql = require('mysql');

const con = mysql.createConnection({
    host: "10.0.0.1",
    user: "nodemanta",
    password: "Dlwlrgkwk1!",
    database: "nodemanta"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con