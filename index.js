const express = require('express');
const path = require("path");

const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src"));

app.get('/', (req, res) => {
    res.render("views/home.ejs");
})


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})