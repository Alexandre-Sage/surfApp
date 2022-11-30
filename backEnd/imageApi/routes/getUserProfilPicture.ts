import express, { Request, Response } from "express";
import { sessionTokenAuthentification, getToken } from "../../sharedModules/jwt/jwtManagement";
import { database } from "../../mongoDb/server/database";
import { ImageInterface } from "../../mongoDb/images/image";

const router = express.Router();


router.get(`/`, async function (req: Request, res: Response): Promise<Response<ImageInterface[]>> {
  const token = getToken(req)
  const pictureFieldObject = { picture: 1, _id: 0 };
  try {
    const { userId } = await sessionTokenAuthentification(`${token}`);
    const pictures = database.imageRepository.getUserImagesByUserId({ userId })
    console.log(pictures)
    return res.status(200).json(pictures);
  } catch (error: any) {
    return res.status(error.httpStatus).json({
      message: error.message,
      error: true
    });
  };
});
export default router;