import express, { Router } from "express";
import getOneDocument from "../../../sharedModules/mongoDb/getOneDocument";
import { sessionTokenAuthentification, getToken } from "../../../sharedModules/jwt/jwtManagement";

import { Spot } from "../../../mongoDb/spots/spots";
//import sessionChecking from "../../modules/sessionManagement/sessionChecking";

const router: Router = express.Router();

router.get("/:spotId", async function (req, res) {
  const { spotId } = req.params;
  const token = getToken(req);
  try {
    const userData = await sessionTokenAuthentification(token);
    const researchObject = { userId: userData.userId, _id: spotId };
    const spotInfo = await getOneDocument(Spot, researchObject);
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