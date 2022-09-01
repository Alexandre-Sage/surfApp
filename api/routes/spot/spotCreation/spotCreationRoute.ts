import express, { Request, Response } from "express";
import { Session } from "express-session";
import sessionChecking from "../../modules/sessionManagement/sessionChecking";
import { csurfChecking } from "../../modules/cookies/csurf";
import spotCreation from "./spotCreationFunction";
const router = express.Router();

router.post("/newSpot", async function (req, res) {
    const session: Session = req.session;
    try {
        await csurfChecking(session, req);
        await sessionChecking(req, session);
        await spotCreation(req.body);
        return res.status(200).json({
            message: "Spot added with sucess",
            error: false
        })
    } catch (error: any) {
        console.log(error);
        return res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    };
});

export default router;
