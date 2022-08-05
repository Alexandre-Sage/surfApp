import express, { Request, Response } from "express";
import { tokenGenerator } from "../modules/cookies/general";
import { csurfCookieGenerator, csurfChecking } from "../modules/cookies/csurf";
import { Session } from "express-session";


const router = express.Router();

router.get("/", async function (req: Request, res: Response): Promise<Response<JSON>> {
    const session: Session = req.session;
    const csurfToken = tokenGenerator(50);
    const csrfName = "CSRF-TOKEN";
    const options = { httpOnly: true, signed: true, sameSite: false };
    await csurfCookieGenerator(req, csurfToken, session);
    return res.status(200).cookie(csrfName, csurfToken, options).json({});
});

export default router;