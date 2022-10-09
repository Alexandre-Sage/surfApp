import multer from "multer";
import fs from "fs";
import sharp from "sharp";
const storage = multer.diskStorage({
    async destination(req, file, callBack) {
        const userName = "testOne";
        const folder = `./src/images/usersImages/${userName}`;
        //AREMPLACER PAR fs.stat
        fs.exists(folder, async (existing) => {
            if (!existing) {
                fs.mkdir(folder, (error) => console.log(error) /*callBack(error, "/tmp")*/);
            }
            ;
            return await callBack(null, folder);
        });
    },
    async filename(req, file, callBack) {
        const userName = "req.session";
        const uniqueSuffix = `${Date.now()}_${userName}`;
        return await callBack(null, file.originalname + '-' + uniqueSuffix);
    },
});
const maxSize = 200022 * 200022 * 2;
function compressImage(path) {
    return sharp(path).resize({
        width: 1000,
        height: 1000,
        fit: "cover",
    }).jpeg().toFile(`${path}_compressed`, (err, res) => res ? fs.rm(path, () => { }) : err);
}
;
const imageStorage = multer({ storage: storage, limits: { fileSize: maxSize } });
export { imageStorage, compressImage };
