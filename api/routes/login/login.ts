import express, { Request, Response } from "express";
import fetchOneEntriesFromDb from "../../mongo/modules/fetchOneEntries";
import User from "../../mongo/users/users";
import { Session } from "express-session";
import { tokenGenerator } from "../modules/cookies/general";
import { UserInterface } from "../../mongo/mongoInterfaces/userInterface";
import { createSession } from "../modules/sessionManagement/sessionCreation";
import { csurfChecking } from "../modules/cookies/csurf";
import notEmptyCheck from "../modules/dataValidation/notEmpty";
import dataValidation from "../modules/dataValidation/validation";
const router = express.Router();
const { log, table } = console;
/**
 * Login Router, handle the login form
 * @return If sucess return a resposne with a session cookie and create the session.
 * @return If invalid credentials return an error response
 */

router.post("/", async function (req: Request, res: Response): Promise<Response> {
    const session: Session = req.session;
    const { email, password } = req.body;
    const researchObject = { email: email };
    try {
        await csurfChecking(session, req)
        await notEmptyCheck(req.body)
        await dataValidation(req.body)
        const user: UserInterface = await fetchOneEntriesFromDb(User, researchObject)
        await user.checkPassword(password);
        const sessionToken = tokenGenerator(75);
        const cookieOptions = { httpOnly: true, signed: true, sameSite: true, maxAge: 600000 };
        const cookieName = "SESSION-TOKEN";
        createSession(session, sessionToken, user);
        return res.status(200).cookie(cookieName, sessionToken, cookieOptions).json({
            message: `Welcome back ${researchObject.email}.`,
            error: false
        });
    } catch (error: any) {
        console.log(error)
        return res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    };
});


export default router;