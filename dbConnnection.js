const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "nodemanta",
    password: "Dlwlrgkwk1!",
    database: "nodemanta"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con