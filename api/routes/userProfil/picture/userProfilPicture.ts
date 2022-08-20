import express, { IRouter, NextFunction, Request, Response } from "express";
import sessionChecking from "../../modules/sessionManagement/sessionChecking";
import fetchOneEntriesFromDb from "../../../mongo/modules/fetchOneEntries";
import User from "../../../mongo/users/users";
import { UserInterface } from "../../../mongo/mongoInterfaces/userInterface";
import { Session } from "express-session";
const router = express.Router();

router.get(`/picture`, async function (req: Request, res: Response): Promise<Response<JSON>> {
    const session: Session = req.session;
    const researchObject = { _id: session.userId };
    const pictureFieldObject = { picture: 1, _id: 0 };
    try {
        await sessionChecking(req, session)
        const pictures: UserInterface = await fetchOneEntriesFromDb(User, researchObject, pictureFieldObject);
        return res.status(200).json({
            pictures: pictures.picture,
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