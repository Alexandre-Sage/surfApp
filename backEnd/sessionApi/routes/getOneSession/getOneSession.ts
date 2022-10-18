import express, { Request, Response } from "express";


const router = express.Router();

router.get("/getOneSession", function (req: Request, res: Response) {
    try {
        res.status(200).json({

        });
    } catch (error) {
        res.status(666).json({

        });
    };

});

export default router;