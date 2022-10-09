import express, { Request, Response } from "express";
import sessionChecking from "../../modules/sessionManagement/sessionChecking";
import { imageStorage, compressImage } from "../../modules/upload/imageStorage";
import addPicturePathToDb from "./pictureModules/addPicture";
import User from "../../../mongo/users/users";
import { PictureObject } from "../../../mongo/mongoInterfaces/pictureObjectInterface";
import { Session } from "express-session";
import multer from "multer";

import sharp, { Sharp } from "sharp";
import fs, { rm } from "fs"
import archiver from "archiver";

import zlib, { createBrotliCompress } from "zlib";
const router = express.Router();
const { log, table, error } = console

const upload = imageStorage.single("image")
const uploadTest = multer({ dest: "./", limits: { fileSize: 1000000000000 } })


/**/
const stringModification = (string: string | undefined, splitCharactere: string, spliceIndex: number, numberOfDelete: number, joinCharactere: string, replacement?: string): string | Error => {
    const array: Array<string> | undefined = string ? string.split(splitCharactere) : undefined;
    if (replacement && array) array.splice(spliceIndex, numberOfDelete, replacement);
    else if (array && !replacement) array.splice(spliceIndex, numberOfDelete);
    else throw new Error("String modification function error");
    const newString: string = array.join(joinCharactere);
    return newString;
};

///////




/** */


router.post("/uploadPicture", imageStorage.single("image"), async function (req: Request, res: Response, next: any): Promise<Response<JSON>> {
    const session: Session = req.session;
    const fileCopy = { ...req.file }
    const { path, destination, originalname } = fileCopy;
    const dataBasePath: string | Error = stringModification(path, "/", 0, 1, "/")
    const pictureObj: PictureObject = { path: `${dataBasePath}_compressed`, place: "test", date: Date.now() };
    try {
        await sessionChecking(req, session)
        await addPicturePathToDb(session, User, pictureObj)
        compressImage(`${path}`);
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



/*
    try {
        const input = fs.createReadStream(`${path}`);
        const output = fs.createWriteStream(`${destination}/${session.userName}.gz`);

        const zipper = archiver("tar", {
            gzip: true,
            store: true,
            zlib: { level: 9 }
        });
        zipper.pipe(output)
        console.log(zipper)
        zipper.append(input, { name: `${originalname}` });
        await zipper.finalize()

    } catch (error) {
        console.log(error)
    }
    */