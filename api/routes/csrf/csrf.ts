import express, { Request, Response } from "express";
import { tokenGenerator } from "../modules/cookies/general";
import { csurfCookieGenerator, csurfChecking } from "../modules/cookies/csurf";
import { Session } from "express-session";


const router = express.Router();

router.get("/", async function (req: Request, res: Response): Promise<Response<JSON>> {
    const session: Session = req.session;
    const csurfToken = tokenGenerator(50);
    const csrfName = "CSRF-TOKEN";
    const options = { httpOnly: true, signed: true, sameSite: "none" };
    //await csurfCookieGenerator(req, csurfToken);
    console.log("qsdqsd", req.signedCookies)
    session.csurfToken = csurfToken
    session.save
    console.log(session)
    return res.status(200).cookie(csrfName, csurfToken, { httpOnly: true, signed: true, sameSite: "none", maxAge: 600000 }).json({
        message: "ok"
    });
});

export default router;