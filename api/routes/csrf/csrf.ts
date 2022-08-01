import express, { Request, Response } from "express";
import { tokenGenerator } from "../modules/cookies/general";
import { csurfCookieGenerator, csurfChecking } from "../modules/cookies/csurf";

const router = express.Router();

router.get("/", function (req: Request, res: Response): Response<JSON> {
    const csurfToken = tokenGenerator(50);
    const csrfName = "CSRF-TOKEN";
    const options = { httpOnly: true, signed: true, sameSite: true, maxAge: 600000 };
    csurfCookieGenerator(req, csurfToken);
    return res.status(200).cookie(csrfName, csurfToken, options).json({});
});

export default router;