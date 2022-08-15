import express, { IRouter, NextFunction, Request, Response } from "express";
import sessionChecking from "../modules/sessionManagement/sessionChecking";
import fetchOneEntriesFromDb from "../../mongo/modules/fetchOneEntries";
import User from "../../mongo/users/users";
import { UserInterface } from "../../mongo/mongoInterfaces/userInterface";
import pictures from "./picture/picture";
import { Session } from "express-session";
const router = express.Router();
const headerFieldObject = { userName: 1, firstName: 1, name: 1, location: 1, creationDate: 1, _id: 0 };
const pictureFieldObject = { picture: 1 };

function userProfilChunks(routeName: string, fieldObject: object): IRouter {
    return router.get(`/${routeName}`, async function (req: Request, res: Response): Promise<Response<JSON>> {
        const session: Session = req.session;
        const researchObject = { _id: session.userId };
        try {
            await sessionChecking(req, session)
            const user: UserInterface = await fetchOneEntriesFromDb(User, researchObject, fieldObject);
            return res.status(200).json({
                userInfo: user,
                error: false
            });
        } catch (error: any) {
            return res.status(error.httpStatus).json({
                message: error.message,
                error: true
            });
        };
    });
};

userProfilChunks("header", headerFieldObject)
userProfilChunks("picture", pictureFieldObject)
router.use(pictures);
export default router;