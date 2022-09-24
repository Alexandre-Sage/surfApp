import express, { Request, Response } from "express";
import { Session } from "express-session";
import { HydratedDocument } from "mongoose";
import addMongoEntries from "../../../mongo/modules/addMongoEntries";
import { SessionInterface } from "../../../mongo/mongoInterfaces/sessionInterface";
import { UserSession } from "../../../mongo/sessions/sessions";
import notEmptyCheck from "../../modules/dataValidation/notEmpty";

const router = express.Router();

router.post("/createSession", async function (req: Request, res: Response) {
    const session: Session = req.session;
    //const body: SessionInterface = { ...req.body, userId: session.userId };
    const { swell, wind, ...bodyCopy } = req.body
    try {
        const bodyCheck = await notEmptyCheck(bodyCopy);

        console.log(bodyCheck);
        const newSession: HydratedDocument<SessionInterface> = new UserSession<SessionInterface>(req.body);
        const test = await addMongoEntries(newSession)
        //console.log(test)
        res.status(200).json({
            message: "Session added successfully"
        });
    } catch (error: any) {
        console.log(error)
        res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    };
});

export default router;