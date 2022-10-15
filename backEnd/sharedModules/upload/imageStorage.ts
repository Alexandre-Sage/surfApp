import { Request } from "express";
import multer, { Multer, StorageEngine } from "multer";
import fs, { exists } from "fs";
import sharp, { Sharp } from "sharp";

const storage = multer.diskStorage({
    async destination(req: Request, file: Express.Multer.File, callBack: Function) {
        const userName = "testOne";
        const folder: string = `../images/usersImages/${userName}`;
        //AREMPLACER PAR fs.stat
        fs.exists(folder, async (existing: boolean) => {
            if (!existing) {
                fs.mkdir(folder, (error: any) => console.log(error)/*callBack(error, "/tmp")*/);
            };
            return await callBack(null, folder);
        });
    },
    async filename(req: Request, file: Express.Multer.File, callBack: Function) {
        const userName = "req.session";
        const uniqueSuffix: string = `${Date.now()}_${userName}`;
        return await callBack(null, file.originalname + '-' + uniqueSuffix)
    },
});
const maxSize = 200022 * 200022 * 2


function compressImage(path: string): Sharp {
    return sharp(path).resize({
        width: 1000,
        height: 1000,
        fit: "cover",
    }).jpeg(

    ).toFile(`${path}_compressed`, (err, res) => res ? fs.rm(path, () => { }) : err);
};


const imageStorage: Multer = multer({ storage: storage, limits: { fileSize: maxSize } });
export { imageStorage, compressImage };