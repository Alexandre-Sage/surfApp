import express, { Request, Response } from "express";
import { UserInterface } from "../../mongoDb/user/userInterface";
import { User } from "../../mongoDb/user/users";
import getOneDocument from "../../sharedModules/mongoDb/getOneDocument";
import { sessionTokenAuthentification } from "../../sharedModules/jwt/jwtManagement";
import { UserJsonDataInterface } from "../../sharedModules/jwt/jwtManagement";
const router = express.Router();

router.get(`/header`, async function (req: Request, res: Response): Promise<Response<JSON>> {
    //const session: Session = req.session;
    const userData = {} as UserJsonDataInterface;
    const researchObject = { _id: userData.userId };
    const headerFieldObject = { userName: 1, firstName: 1, name: 1, location: 1, creationDate: 1, _id: 0 };
    try {
        //await sessionChecking(req, session)
        const userInfo: UserInterface = await getOneDocument(User, researchObject, headerFieldObject);
        return res.status(200).json([userInfo]);
    } catch (error: any) {
        return res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    };
});

export default router;
