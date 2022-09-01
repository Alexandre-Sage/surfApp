import express, { Request, Response } from "express";
import spotCreation from "./spotCreation/spotCreationRoute";
import getAllSpots from "./getAllSpot/getAllSpotRoute";
import getOneSpot from "./getOneSpot/getOneSpotRoute";
const router = express.Router();

router.use(spotCreation);
router.use(getAllSpots);
router.use(getOneSpot);
export default router;
