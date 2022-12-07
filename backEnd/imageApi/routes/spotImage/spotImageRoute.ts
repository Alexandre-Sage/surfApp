import express, { Request, Response } from "express";
import { sessionTokenAuthentification, getToken } from "../../../sharedModules/jwt/jwtManagement";
import { database } from "../../../mongoDb/server/database";
import { ImageInterface } from "../../../mongoDb/images/image";
import { SpotInterface } from "../../../mongoDb/spots/spotInterface";
import { spotImageStorage, compressImage } from "../../../sharedModules/upload/spotImageStorage"
import { rawImageToDbMapper } from "../userPictureUpload";
const router = express.Router();
const upload = spotImageStorage.single("image")
type PostSpotImageRequest = Request<{ spotId: SpotInterface["_id"] }, unknown, ImageInterface>;
router.get(`/:spotId`, spotImageStorage.single("image"), async function (req: Request, res: Response): Promise<Response<any>> {
  const { spotId } = req.params
  const token = getToken(req)

  try {
    const imageData = rawImageToDbMapper(req.file)
    const { userId } = await sessionTokenAuthentification(`${token}`);
    // const spotName = database.spotRepository.getSpotById({ spotId: spotId as unknown as SpotInterface["_id"], selectedField })
    const pictures = await database.imageRepository.addSpotImage({ userId, imageData, spotId: spotId as unknown as SpotInterface["_id"] });
    return res.status(200).json("ok");
  } catch (error: any) {
    return res.status(error.httpStatus).json({
      message: error.message,
      error: true
    });
  };
});
export default router;