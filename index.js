const express = require("express");
const app = express();
const path = require("path");
const sql = require("mysql");
const bodyParser = require("body-parser")
const data = require("./src/data/projects");
const fs = require("fs");
const { default: Axios } = require("axios");
require('dotenv').config()

console.log(process.env)

const connect = sql.createConnection({
  host: process.env.HOST,
  user: process.env.USER_DATABASE,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT_SQL,
});
/*

const connect = sql.createConnection({
  host: "mysql669.umbler.com",
  user: "ramon_paolo",
  password: "familiAMaram12.",
  database: "data-science",
  port: 41890,
});
*/
connect.connect((error) => { console.log(error) })

connect.query("SELECT * FROM users", (error, results, fields) => {
  if (error) {
    console.log(erros)
  } else if (results) {
    console.log("Results: ")
    results.forEach((user) => {
      console.log(user)
    })
  } else {
    console.log(fields)
  }
})

/*
connect.query(
  "SELECT * FROM `users`",
  (erros, results, fields) => {
    if (erros) {
      return console.log(erros);
    }
     console.log(results);
    // console.log(fields);
    connect.end();
  }
);*/

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Ouvindo a porta: ${port}`));
