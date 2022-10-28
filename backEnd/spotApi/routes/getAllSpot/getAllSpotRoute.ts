import express, { Router } from "express";
import { sessionTokenAuthentification, getToken } from "../../../sharedModules/jwt/jwtManagement";
import getAllDocument from "../../../sharedModules/mongoDb/getAllDocument";
import { Spot } from "../../../mongoDb/spots/spots";

const router: Router = express.Router();

router.get("/", async function (req, res) {
  const token = getToken(req);
  const fieldObject = { _id: 1, spotName: 1, location: 1 };
  try {
    const userData = await sessionTokenAuthentification(token)
    const researchObject = { userId: userData.userId };
    const spotInfo = await getAllDocument(Spot, researchObject, fieldObject);
    res.status(200).json(
      spotInfo,
    );
  } catch (error: any) {
    res.status(error.httpStatus).json({
      message: error.message,
      error: true
    });
  };
});

export default router;

