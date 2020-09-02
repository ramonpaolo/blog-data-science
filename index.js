const express = require("express");
const app = express();
const path = require("path");
const sql = require("mysql");
const data = require("./src/data/projects");
const fs = require("fs");

/*const connect = sql.createConnection({
  host: "mysql669.umbler.com",
  user: "ramon_paolo",
  password: "familiAMaram12.",
  database: "data-science",
  port: 41890,
});

connect.connect();

connect.query("SELECT * FROM users", (erros, results, fields)=>{
  console.log("A solução é: " + results)
})

const conecao = connect.query(
  "SELECT * FROM `users`",
  (erros, results, fields) => {
    if (erros) {
      return console.log(erros);
    }
    console.log(results);
    console.log(fields);
    connect.end();
  }
);*/

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Ouvindo a porta: ${port}`));
