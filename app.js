const { log } = require("console");
const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("le cong hien tro lai roi day");
});

app.get("/hienle", (req, res) => {
    res.send("le cong hien ");
});

app.listen(port, () => {
    console.log(`my app is running on port: ${port}`);
});
