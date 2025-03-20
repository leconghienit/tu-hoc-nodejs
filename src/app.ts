import express from "express";
import "dotenv/config";
import { log } from "node:console";
const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hienle", (req, res) => {});

app.listen(port, () => {
    console.log(`my app is running on port: ${port}`);
    console.log(`PORT`, port);
});
