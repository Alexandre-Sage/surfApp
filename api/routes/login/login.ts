import express, { Request, Response } from "express";
import fetchOneEntriesFromDb from "../../mongo/modules/fetchOneEntries";
import User from "../../mongo/users/users";
import { Session } from "express-session"
import { tokenGenerator } from "../modules/cookies/general";
import { UserInterface } from "../../mongo/mongoInterfaces/userInterface";
const router = express.Router();
const { log, table } = console;

router.post("/", async function (req: Request, res: Response) {
    const session: Session = req.session;
    const { userName, password } = req.body;
    const researchObject = { userName: userName };
    try {
        const user: UserInterface = await fetchOneEntriesFromDb(User, researchObject)
        await user.checkPassword(password);
        const sessionToken = tokenGenerator(75);
        const cookieOptions = { httpOnly: true, signed: true, sameSite: true, maxAge: 600000 };
        const cookieName = "SESSION-TOKEN";
        return res.status(200).cookie(cookieName, sessionToken, cookieOptions).json({
            message: `Welcome back ${researchObject.userName}.`,
            error: false
        })
    } catch (error: any) {
        log("catch", error)
        return res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    }
});


export default router;