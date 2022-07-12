import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:id', homeController.getDetailPage)

    router.get('/about', (req, res) => {
        res.send(`I 'm Thai`)
    })

    return app.use('/', router)
}

export default initWebRouter;