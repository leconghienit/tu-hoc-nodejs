import express from "express";
import "dotenv/config";
import { log } from "node:console";
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("le cong hien tro lai roi day nodemon");
});

app.get("/hienle", (req, res) => {
    res.send("le cong hien xin chao ");
});

app.listen(port, () => {
    console.log(`my app is running on port: ${port}`);
    console.log(`PORT`, port);
});
