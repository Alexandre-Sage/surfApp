import { Request } from "express";
import multer, { Multer, StorageEngine } from "multer";
import fs, { exists } from "fs";
import { Session } from "express-session";
import sessionChecking from "../sessionManagement/sessionChecking";

const storage: StorageEngine = multer.diskStorage({
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
    filename(req: Request, file: Express.Multer.File, callBack: Function): void {
        const { userName }: Session = req.session;
        const uniqueSuffix: string = `${Date.now()}_${userName}`;
        callBack(null, file.originalname + '-' + uniqueSuffix);
    }
});
const imageStorage: Multer = multer({ storage: storage });
export default imageStorage;