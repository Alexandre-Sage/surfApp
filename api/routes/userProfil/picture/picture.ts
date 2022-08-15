import express, { Request, Response } from "express";
import sessionChecking from "../../modules/sessionManagement/sessionChecking";
import imageStorage from "../../modules/upload/imageStorage";
import addPicturePathToDb from "./pictureModules/addPicture";
import User from "../../../mongo/users/users";
import { PictureObject } from "../../../mongo/mongoInterfaces/pictureObjectInterface";
import { Session } from "express-session";
const router = express.Router();
const { log, table, error } = console

const upload = imageStorage.single("image")
router.post("/uploadPicture", imageStorage.single("image"), async function (req: Request, res: Response, next: any): Promise<Response<JSON>> {
    const fileCopy = { ...req.file }
    const session: Session = req.session;
    const pictureObj: PictureObject = { path: `${fileCopy.path}`, place: "test", date: Date.now() };
    try {
        await sessionChecking(req, session)
        await addPicturePathToDb(session, User, pictureObj)
        return res.status(200).json({
            message: "You're image was successfully uploaded.",
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