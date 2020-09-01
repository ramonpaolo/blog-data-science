const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/*app.get("/api/users", (req, res) => {
        res.sendFile(__dirname + "/db.json")
        "concurrently \"npm star\" \"npm run server\""
})*/

/*app.get("/blog-data-science", (req, res) => {
        res.sendFile(__dirname + "/client/build/index.html", () => console.log("Error"))
})*/

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Ouvindo a porta: ${port}`));
