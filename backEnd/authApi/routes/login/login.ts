import express, { Request, Response } from "express";
import { createAuthentification } from "./modules/createAuthentification.js";
import dataValidation from "../../../sharedModules/dataValidation/validation.js";
import notEmptyCheck from "../../../sharedModules/dataValidation/notEmpty.js";
import { cookieOptions } from "../../../sharedModules/cookies/cookieOptions.js";

const router = express.Router();
const { log, table } = console;

router.post("/", async function (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    try {
        await notEmptyCheck(req.body);
        await dataValidation(req.body);
        const cookieName: string = "JWT-TOKEN";
        const authentification = await createAuthentification(password, email);
        //console.log(authentification)
        return res.status(200).cookie(cookieName, authentification.sessionToken, cookieOptions).json({
            message: `Welcome back ${authentification.userName}!`,
            error: false
        });
    } catch (error: any) {
        //console.log(error)
        return res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    };
});

export default router;