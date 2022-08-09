import express, { Request, Response } from "express";
import notEmptyCheck from "../modules/dataValidation/notEmpty";
import dataValidation from "../modules/dataValidation/validation";
import addMongoEntries from "../../mongo/modules/addMongoEntries";
import createUser from "./modules/createUser";
import passwordConfirmation from "./modules/passwordConfirmation";
import { tokenGenerator } from "../modules/cookies/general";
import { csurfCookieGenerator, csurfChecking } from "../modules/cookies/csurf";

const router = express.Router();

router.post("/", async function (req: Request, res: Response) {
    //  console.log(req.body)
    const session = req.session;
    try {
        await csurfChecking(session, req);
        await notEmptyCheck(req.body);
        await dataValidation(req.body);
        await passwordConfirmation(req.body.password, req.body.passwordConfirmation)
        const newUser = await createUser(req.body);
        await addMongoEntries(newUser);
        res.status(200).json({
            message: "User was sucessfully created",
            error: false
        });
    } catch (error: any) {
        res.status(error.httpStatus).json({
            message: error.message,
            error: true
        })
    }
});

export default router;
