import express from "express";
import { createAuthentification } from "./modules/createAuthentification";
import dataValidation from "../../../sharedModules/dataValidation/validation.js";
import notEmptyCheck from "../../../sharedModules/dataValidation/notEmpty.js";
import { cookieOptions } from "../../../sharedModules/cookies/cookieOptions.js";
const router = express.Router();
const { log, table } = console;
router.post("/", async function (req, res) {
    const { email, password } = req.body;
    try {
        await notEmptyCheck(req.body);
        await dataValidation(req.body);
        const cookieName = "JWT-TOKEN";
        const authentification = await createAuthentification(password, email);
        return res.status(200).cookie(cookieName, authentification.sessionToken, cookieOptions).json({
            message: `Welcome back ${authentification.userName}!`,
            error: false
        });
    }
    catch (error) {
        //console.log(error)
        return res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    }
    ;
});
export default router;
