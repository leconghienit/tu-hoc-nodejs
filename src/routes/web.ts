import express, { Express } from "express";
const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", (req, res) => {
        res.render("home.ejs");
    });

    router.get("/hienle", (req, res) => {
        console.log("hello world");
    });

    app.use("/", router);
};

export default webRoutes;
