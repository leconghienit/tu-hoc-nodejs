import express from "express";
import "dotenv/config";
import { log } from "node:console";
import webRoutes from "./routes/web";

const app = express();
const port = process.env.PORT;
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// config routes
webRoutes(app);
app.listen(port, () => {
    console.log(`my app is running on port: ${port}`);
    console.log(`PORT`, port);
});
