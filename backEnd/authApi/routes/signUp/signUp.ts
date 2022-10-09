import express, { Request, Response } from "express";
import passwordConfirmation from "./modules/passwordConfirmation.js";
import createUser from "./modules/createUser.js";
import { UserInterface } from "../../../mongoDb/user/userInterface.js";
import addMongoDocument from "../../../sharedModules/mongoDb/addMongoDocument.js";
import notEmptyCheck from "../../../sharedModules/dataValidation/notEmpty.js";
import dataValidation from "../../../sharedModules/dataValidation/validation.js";

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
