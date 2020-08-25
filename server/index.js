const app = require("express")()

app.get("/api/users", (req, res) => {
        res.sendFile(__dirname + "/db.json")
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Ouvindo a porta: ${port}`))