import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", function (req: Request, res: Response) {
    res.status(200).json({
        logoPath: "images/logo/surfAppLogo.png",
        error: false
    })
})

export default router;