import express, { Request, Response } from "express";
import { imageStorage, compressImage } from "../../sharedModules/upload/imageStorage";
import { User } from "../../mongoDb/user/users";
import { PictureObject } from "../../mongoDb/generalInterface/pictureObjectInterface";
import multer from "multer";
import { sessionTokenAuthentification, getToken } from "../../sharedModules/jwt/jwtManagement";
import { database } from "../../mongoDb/server/database";

const router = express.Router();
const { log, table, error } = console

const upload = imageStorage.single("image")

export const createDbImagePath = (string: string | undefined, splitCharactere: string, spliceIndex: number, numberOfDelete: number, joinCharactere: string, replacement?: string): string | Error => {
   const array: Array<string> | undefined = string ? string.split(splitCharactere) : undefined;
   if (replacement && array) array.splice(spliceIndex, numberOfDelete, replacement);
   else if (array && !replacement) array.splice(spliceIndex, numberOfDelete);
   else throw new Error("String modification function error");
   const newString: string = array.join(joinCharactere);
   return newString;
};

export const rawImageToDbMapper = (rawImage: any) => {
   const { path, destination, originalname } = rawImage;
   const dataBasePath = createDbImagePath(path, "/", 0, 1, "/")
   const imageData = { path: `${dataBasePath}_compressed`, uploadDate: new Date() };
   return imageData;
}

router.post("/", imageStorage.single("image"), async function (req: Request, res: Response, next: any): Promise<Response<JSON>> {
   const fileCopy = { ...req.file }
   const { path, destination, originalname } = fileCopy;
   const token = getToken(req)
   try {
      const imageData = rawImageToDbMapper(fileCopy)
      const userId = (await sessionTokenAuthentification(`${token}`)).userId;
      compressImage(`${path}`);
      database.imageRepository.addUserImage({ userId, imageData })
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
