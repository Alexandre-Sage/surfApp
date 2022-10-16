import express, { Request, Response } from "express";
import getOneDocument from "../../../sharedModules/mongoDb/getOneDocument.js";
import { User } from "../../../mongoDb/user/users.js";
import { UserInterface } from "../../../mongoDb/user/userInterface.js";
import { sessionTokenAuthentification, getToken } from "../../../sharedModules/jwt/jwtManagement.js";
const router = express.Router();


router.get(`/`, async function (req: Request, res: Response): Promise<Response<JSON>> {
   const token = getToken(req)
   const pictureFieldObject = { picture: 1, _id: 0 };
   try {
      const checkTokenIntegrity = await sessionTokenAuthentification(`${token}`);
      const researchObject = { _id: checkTokenIntegrity.userId };
      const pictures: UserInterface = await getOneDocument(User, researchObject, pictureFieldObject);
      return res.status(200).json(pictures.picture);
   } catch (error: any) {
      return res.status(error.httpStatus).json({
         message: error.message,
         error: true
      });
   };
});
export default router;