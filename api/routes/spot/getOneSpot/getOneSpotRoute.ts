import express, { Router } from "express";
import { Session } from "express-session";
import fetchOneEntriesFromDb from "../../../mongo/modules/fetchOneEntries";
import sessionChecking from "../../modules/sessionManagement/sessionChecking";
import { Spot } from "../../../mongo/spots/spots";

const router: Router = express.Router();

router.get("/getSpot/:spotId", async function (req, res) {
    const session: Session = req.session;
    console.log(req.params)
    const { spotId } = req.params;
    const researchObject = {
        userId: session.userId,
        _id: spotId
    };
    try {
        await sessionChecking(req, session);
        const spotInfo = await fetchOneEntriesFromDb(Spot, researchObject);
        res.status(200).json({
            spotInfo,
            error: false
        })
    } catch (error: any) {
        console.log(error)
        res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    };
});

export default router;