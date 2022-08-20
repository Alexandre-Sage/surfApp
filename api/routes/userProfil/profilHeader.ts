import express, { Request, Response } from "express";
import { Session } from "express-session";
import { UserInterface } from "../../mongo/mongoInterfaces/userInterface";
import User from "../../mongo/users/users";
import fetchOneEntriesFromDb from "../../mongo/modules/fetchOneEntries";
import sessionChecking from "../modules/sessionManagement/sessionChecking";

const router = express.Router();

router.get(`/header`, async function (req: Request, res: Response): Promise<Response<JSON>> {
    const session: Session = req.session;
    const researchObject = { _id: session.userId };
    const headerFieldObject = { userName: 1, firstName: 1, name: 1, location: 1, creationDate: 1, _id: 0 };
    try {
        await sessionChecking(req, session)
        const userInfo: UserInterface = await fetchOneEntriesFromDb(User, researchObject, headerFieldObject);
        return res.status(200).json({
            userInfo,
            error: false
        });
    } catch (error: any) {
        return res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    };
});

export default router;
