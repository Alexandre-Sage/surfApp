import express, { Request, Response } from "express";
import passwordConfirmation from "./modules/passwordConfirmation";
import createUser from "./modules/createUser";
import { UserInterface } from "../../../mongoDb/user/userInterface";
import addMongoDocument from "../../../sharedModules/mongoDb/addMongoDocument";
import notEmptyCheck from "../../../sharedModules/dataValidation/notEmpty";
import dataValidation from "../../../sharedModules/dataValidation/validation";

const router = express.Router();

router.post("/", async function (req: Request, res: Response) {
    try {
        await notEmptyCheck(req.body);
        await dataValidation(req.body);
        await passwordConfirmation(req.body.password, req.body.confirmPassword)
        const newUser: UserInterface | Error = await createUser(req.body);
        await addMongoDocument(newUser);
        res.status(200).json({
            message: "User was sucessfully created",
            error: false
        });
    } catch (error: any) {
        res.status(error.httpStatus).json({
            message: error.message,
            error: true
        })
    }
});

export default router;
