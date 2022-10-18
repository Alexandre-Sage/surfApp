import express, { Request, Response } from "express";
import { sessionTokenAuthentification, getToken } from "../../../sharedModules/jwt/jwtManagement.js";
import spotCreation from "./spotCreationFunction.js";
//import { Session } from "express-session";
//import sessionChecking from "../../modules/sessionManagement/sessionChecking";
//import { csurfChecking } from "../../modules/cookies/csurf";
const router = express.Router();

router.post("/", async function (req, res) {
  const token = getToken(req);
  try {
    const userData = await sessionTokenAuthentification(token)
    await spotCreation(req.body, userData.userId);
    return res.status(200).json({
      message: "Spot added with sucess",
      error: false
    })
  } catch (error: any) {
    //console.log(error);
    return res.status(error.httpStatus).json({
      message: error.message,
      error: true
    });
  };
});

export default router;
