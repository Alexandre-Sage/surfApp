import express, { Router } from "express";
import { Session } from "express-session";
import { Spot } from "../../../mongo/spots/spots";
import sessionChecking from "../../modules/sessionManagement/sessionChecking";
import fetchAllDocuments from "../../../mongo/modules/fetchAllDocument";

const router: Router = express.Router();

router.get("/getAllSpots", async function (req, res) {
    const session: Session = req.session;
    const researchObject = { userId: session.userId };
    const fieldObject = { _id: 1, spotName: 1, location: 1 };
    try {
        await sessionChecking(req, session);
        const spotInfo = await fetchAllDocuments(Spot, researchObject, fieldObject);
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

