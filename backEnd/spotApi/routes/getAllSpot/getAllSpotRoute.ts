import express, { Router } from "express";
import { sessionTokenAuthentification, getToken } from "../../../sharedModules/jwt/jwtManagement";
import { fetchAllDocument } from "../../../sharedModules/mongoDb/getAllDocument";
import { Spot, SpotSchema } from "../../../mongoDb/spots/spot";
import { User } from "../../../mongoDb/user/users";
import { connect } from "mongoose";

const router: Router = express.Router();

router.get("/", async function (req, res) {
  //635cf1f59deea638d72a793c console.log(req)
  const token = getToken(req);
  const fieldObject = { _id: 1, spotName: 1, location: 1 };
  try {
    const userData = await sessionTokenAuthentification(token)
    console.log(userData.userId)
    const researchObject = { userId: userData.userId };
    const spotInfo = await fetchAllDocument(Spot, researchObject, fieldObject);
    console.log(spotInfo)
    res.status(200).json(
      spotInfo,
    );
    console.log("ok")
  } catch (error: any) {
    console.log(error)
    res.status(error.httpStatus).json({
      message: error.message,
      error: true
    });
  };
});

export default router;

