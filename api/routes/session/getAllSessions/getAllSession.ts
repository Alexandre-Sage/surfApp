import express, { Request, Response } from "express";

const router = express.Router();

router.get("/getAllSession", function (req: Request, res: Response) {
    try {
        res.status(200).json({

        });
    } catch (error) {
        res.status(666).json({

        });
    };

});

export default router;