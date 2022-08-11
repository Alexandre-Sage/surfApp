import express, { Request, Response } from "express";
import sessionChecking from "../../modules/sessionManagement/sessionChecking";
import fetchOneEntriesFromDb from "../../../mongo/modules/fetchOneEntries";
import imageStorage from "../../modules/upload/imageStorage";
//import { File } from "multer"
const router = express.Router();
const { log, table, error } = console

router.post("/uploadPicture", imageStorage.single("image"), async function (req: Request, res: Response): Promise<Response<JSON>> {
    const copy = { ...req.file }
    //ajouter path au profil utilisateur
    const session = req.session;
    try {
        await sessionChecking(req, session)
        return res.status(200).json({
            message: "You're image was successfully uploaded.",
            error: false
        });
    } catch (error: any) {
        console.log(error)
        return res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    };
});

export default router;