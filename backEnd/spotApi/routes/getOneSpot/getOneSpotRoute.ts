import express, { Router, Request } from "express";
import { fetchOneDocument } from "../../../sharedModules/mongoDb/getOneDocument";
import { sessionTokenAuthentification, getToken } from "../../../sharedModules/jwt/jwtManagement";

import { Spot } from "../../../mongoDb/spots/spot";
import { database } from "../../../mongoDb/server/database";
import { Types } from "mongoose";
//import sessionChecking from "../../modules/sessionManagement/sessionChecking";

const router: Router = express.Router();
type RequestType = Request<{ spotId: string }, unknown, {}>;
router.get("/:spotId", async function (req: RequestType, res) {
  const { spotId } = req.params;
  const token = getToken(req);
  try {
    const userData = await sessionTokenAuthentification(token);
    const spotInfo = database.spotRepository.getSpotById({ spotId: spotId as unknown as Types.ObjectId })
    res.status(200).json(spotInfo);
  } catch (error: any) {
    console.log(error)
    res.status(error.httpStatus).json({
      message: error.message,
      error: true
    });
  };
});

export default router;