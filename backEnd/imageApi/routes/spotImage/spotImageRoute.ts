import express, { Request, Response } from "express";
import { ImageInterface } from "../../../mongoDb/images/image";
import { database } from "../../../mongoDb/server/database";
import { SpotInterface } from "../../../mongoDb/spots/spotInterface";
import { getToken, sessionTokenAuthentification } from "../../../sharedModules/jwt/jwtManagement";
import { spotImageStorage } from "../../../sharedModules/upload/spotImageStorage";
import { services } from "../../server";
const router = express.Router();
// const upload = spotImageStorage.single("image")
//type PostSpotImageRequest = Request<{ spotId: SpotInterface["_id"] }, unknown, ImageInterface>;

router.post(`/:spotId`, spotImageStorage.single("image"), async function (req: Request, res: Response): Promise<Response<any>> {
  const { uploadService } = services;
  const { spotId } = req.params
  const token = getToken(req)
  //console.log(req.file)
  try {
    const imageData = uploadService.rawImageToDbMapper(req.file)
    const { userId } = await sessionTokenAuthentification(`${token}`);
    await uploadService.uploadSpotPicture({ userId, imageData, spotId: spotId as unknown as SpotInterface["_id"] })
    return res.status(200).json({
      error: false,
      message: "You're image was successfully uploaded."
    });
  } catch (error: any) {
    return res.status(error.httpStatus).json({
      message: error.message,
      error: true
    });
  };
});
export default router;