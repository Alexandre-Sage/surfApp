import { Request } from "express";
import fs from "fs";
import multer, { Multer } from "multer";
import sharp, { Sharp } from "sharp";
import { database } from "../../mongoDb/server/database";
import { SpotInterface } from "../../mongoDb/spots/spotInterface";
import { getToken, sessionTokenAuthentification } from "../jwt/jwtManagement";
const storage = multer.diskStorage({
  async destination(req: Request, file: Express.Multer.File, callBack: Function) {
    console.log(req.file)
    const { spotId } = req.params;
    const selectedField = { _id: 1, spotName: 1 };
    console.log(spotId, "storage")
    const { spotName } = await database.spotRepository.getSpotById({ spotId: spotId as unknown as SpotInterface["_id"], selectedField })
    const userName = (await sessionTokenAuthentification(getToken(req))).userName;
    const folder: string = `./src/images/spotImages/${userName}`;
    //AREMPLACER PAR fs.stat
    fs.exists(folder, async (existing: boolean) => {
      if (!existing) {
        fs.mkdir(folder, (error: any) => console.log(error)/*callBack(error, "/tmp")*/);
      };
      return await callBack(null, folder);
    });
  },
  async filename(req: Request, file: Express.Multer.File, callBack: Function) {
    const userName = (await sessionTokenAuthentification(getToken(req))).userName;
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


const spotImageStorage: Multer = multer({ storage: storage, limits: { fileSize: maxSize } });
export { spotImageStorage, compressImage };
