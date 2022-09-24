import { Request } from "express";
import multer, { Multer, StorageEngine } from "multer";
import fs, { exists } from "fs";
import { Session } from "express-session";
import sessionChecking from "../sessionManagement/sessionChecking";
import path from "path";
const storage = multer.diskStorage({
    async destination(req: Request, file: Express.Multer.File, callBack: Function) {
        const { userName }: Session = req.session;
        console.log("dest", file)
        const folder: string = `./src/images/usersImages/${userName}`;
        fs.exists(folder, async (existing: boolean) => {
            if (!existing) {
                return fs.mkdir(folder, (error: any) => callBack(error, folder));
            };
            return await callBack(null, folder);
        });
    },
    async filename(req: Request, file: Express.Multer.File, callBack: Function) {
        const { userName }: Session = req.session;
        console.log("disk storage", file)
        const uniqueSuffix: string = `${Date.now()}_${userName}`;
        return await callBack(null, file.originalname + '-' + uniqueSuffix)
    },
});
const maxSize = 200022 * 200022 * 2
const imageStorage: Multer = multer({ storage: storage, limits: { fileSize: maxSize } });
export default imageStorage;