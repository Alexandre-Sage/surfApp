import express, { Request, Response } from "express";
import { UserInterface } from "../../../mongoDb/user/userInterface";
import { User } from "../../../mongoDb/user/users";
import getOneDocument from "../../../sharedModules/mongoDb/getOneDocument";
import { sessionTokenAuthentification, getToken } from "../../../sharedModules/jwt/jwtManagement";
import router from "../profilHeader";
import { updateDocument } from "../../../sharedModules/mongoDb/updateDocument";
import { notEmptyCheck } from "../../../sharedModules/dataValidation/notEmpty"
import { dataValidation } from "../../../sharedModules/dataValidation/validation"
const rouer = express.Router();



router.post("/", async (req: Request, res: Response) => {
  const token = getToken(req);
  try {
    const userData = await sessionTokenAuthentification(token);
    const serchObject = { _id: userData.userId };
    const fieldToUpdate = { ...req.body };
    await dataValidation(req.body)
    await notEmptyCheck(req.body)
    await updateDocument(User, serchObject, fieldToUpdate)
    res.status(200).json({
      message: "Profil sucessfully updated",
      error: false
    })
  } catch (error: any) {
    res.status(error.status).json({
      error: true,
      message: error.message
    })
  }
});

export default router;
