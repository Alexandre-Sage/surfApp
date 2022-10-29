import express, { Request, Response } from "express";
import { UserInterface } from "../../mongoDb/user/userInterface";
import { User } from "../../mongoDb/user/users";
import { fetchOneDocument } from "../../sharedModules/mongoDb/getOneDocument";
import { sessionTokenAuthentification } from "../../sharedModules/jwt/jwtManagement";
const router = express.Router();

router.get(`/`, async function (req: Request, res: Response): Promise<Response<JSON>> {
  const token = req.headers.authorization!.split(" ")[1];
  const headerFieldObject = { userName: 1, firstName: 1, name: 1, location: 1, creationDate: 1, _id: 0 };
  try {
    const checkTokenIntegrity = await sessionTokenAuthentification(`${token}`);
    const researchObject = { _id: checkTokenIntegrity.userId };
    const userInfo: UserInterface = await fetchOneDocument(User, researchObject, headerFieldObject);
    return res.status(200).json([userInfo]);
  } catch (error: any) {
    return res.status(error.httpStatus).json({
      message: error.message,
      error: true
    });
  };
});

export default router;
