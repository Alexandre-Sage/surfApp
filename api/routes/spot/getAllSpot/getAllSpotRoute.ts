import express, { Router } from "express";
import { Session } from "express-session";
import { Spot } from "../../../mongo/spots/spots";
import sessionChecking from "../../modules/sessionManagement/sessionChecking";
import fetchAllDocuments from "../../../mongo/modules/fetchAllDocument";

const router: Router = express.Router();

router.get("/getAllSpots", async function (req, res) {
    const session: Session = req.session;
    const researchObject = { userId: session.userId };
    try {
        await sessionChecking(req, session);
        const spotInfo = await fetchAllDocuments(Spot, researchObject);
        res.status(200).json({
            spotInfo,
            error: false
        });
    } catch (error: any) {
        res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    };
});

export default router;