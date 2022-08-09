import express, { Request, Response } from "express";
import sessionChecking from "../modules/sessionManagement/sessionChecking";
import fetchOneEntriesFromDb from "../../mongo/modules/fetchOneEntries";
import User from "../../mongo/users/users";
import { UserInterface } from "../../mongo/mongoInterfaces/userInterface";

const router = express.Router();

router.get("/", async function (req: Request, res: Response): Promise<Response<JSON>> {
    const session = req.session;
    console.log(session)
    const researchObject = { _id: /*session.userId*/0 };
    const fieldObject = { _id: 0, password: 0, salt: 0 };
    try {
        await sessionChecking(req, session)
        const user: UserInterface = await fetchOneEntriesFromDb(User, researchObject, fieldObject);
        console.log(user)
        return res.status(200).json({
            userInfo: user,
            error: false
        });
    } catch (error: any) {
        console.log(error)
        return res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    };
});

export default router;