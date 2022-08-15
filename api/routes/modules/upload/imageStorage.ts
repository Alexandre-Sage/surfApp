import { Request } from "express";
import multer, { Multer, StorageEngine } from "multer";
import fs, { exists } from "fs";
import { Session } from "express-session";
import sessionChecking from "../sessionManagement/sessionChecking";
import path from "path";
const storage = multer.diskStorage({
    async destination(req: Request, file: Express.Multer.File, callBack: Function) {
        const { userName }: Session = req.session;
        const folder: string = `./src/images/usersImages/${userName}`;
        fs.exists(folder, (existing: boolean) => {
            if (!existing) {
                return fs.mkdir(folder, (error: any) => callBack(error, folder));
            };
            return callBack(null, folder);
        });
    },
    async filename(req: Request, file: Express.Multer.File, callBack: Function) {
        const { userName }: Session = req.session;
        const uniqueSuffix: string = `${Date.now()}_${userName}`;
        return callBack(null, file.originalname + '-' + uniqueSuffix)
    }
});

const imageStorage: Multer = multer({ storage: storage });
export default imageStorage;