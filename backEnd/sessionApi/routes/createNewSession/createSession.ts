import express, { Request, Response } from "express";
import { HydratedDocument } from "mongoose";
import notEmptyCheck from "../../../sharedModules/dataValidation/notEmpty.js";
import { SessionInterface } from "../../../mongoDb/sessions/sessionInterface.js";
import { UserSession } from "../../../mongoDb/sessions/sessions.js";
import addMongoEntries from "../../../sharedModules/mongoDb/addMongoDocument.js";
import { sessionTokenAuthentification, getToken } from "../.././../sharedModules/jwt/jwtManagement";
//FAIRE AUTHENTIFICATION
const router = express.Router();

router.post("/createSession", async function (req: Request, res: Response) {
  const { swell, wind, ...bodyCopy } = req.body
  const token = getToken(req)
  try {
    const promiseArray = [
      await notEmptyCheck(bodyCopy),
      await notEmptyCheck(swell),
      await notEmptyCheck(wind)
    ]
    const userData = await sessionTokenAuthentification(token)
    const bodyCheck = await Promise.all(promiseArray);
    const newSession: HydratedDocument<SessionInterface> = new UserSession<SessionInterface>({ ...req.body, userId: userData.userId });
    const addSessionToDatabase = await addMongoEntries(newSession);
    res.status(200).json({
      message: "Session added successfully"
    });
  } catch (error: any) {
    res.status(error.httpStatus).json({
      message: error.message,
      error: true
    });
  };
});

export default router;