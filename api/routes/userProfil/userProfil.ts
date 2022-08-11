import express, { Request, Response } from "express";
import sessionChecking from "../modules/sessionManagement/sessionChecking";
import fetchOneEntriesFromDb from "../../mongo/modules/fetchOneEntries";
import User from "../../mongo/users/users";
import { UserInterface } from "../../mongo/mongoInterfaces/userInterface";
import pictures from "./picture/picture";
const router = express.Router();

router.get("/", async function (req: Request, res: Response): Promise<Response<JSON>> {
    const session = req.session;
    console.log(session)
    const researchObject = { _id: session.userId };
    const fieldObject = { _id: 0, password: 0, salt: 0 };
    try {
        await sessionChecking(req, session)
        const user: UserInterface = await fetchOneEntriesFromDb(User, researchObject, fieldObject);
        return res.status(200).json({
            userInfo: user,
            error: false
        });
    } catch (error: any) {
        return res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    };
});
router.use(pictures);
export default router;