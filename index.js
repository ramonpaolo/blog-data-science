const express = require("express");
const app = express();
const path = require("path");
//const sql = require("mysql");
const bodyParser = require("body-parser")
const data = require("./src/data/projects");
const fs = require("fs");
const { default: Axios } = require("axios");


/*const connect = sql.createConnection({
  
});

connect.connect((error) => { console.log(error) })

connect.query("SELECT * FROM users", (erros, results, fields) => {
  console.log("A solução é: " + results)
})

const conecao = connect.query(
  "SELECT * FROM `users`",
  (erros, results, fields) => {
    if (erros) {
      return console.log(erros);
    }
    // console.log(results);
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
