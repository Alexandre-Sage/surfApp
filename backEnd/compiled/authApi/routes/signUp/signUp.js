import express from "express";
import createUser from "./modules/createUser";
import passwordConfirmation from "./modules/passwordConfirmation";
import addMongoDocument from "../../../sharedModules/mongoDb/addMongoDocument.js";
import notEmptyCheck from "../../../sharedModules/dataValidation/notEmpty.js";
import dataValidation from "../../../sharedModules/dataValidation/validation.js";
const router = express.Router();
router.post("/", async function (req, res) {
    try {
        await notEmptyCheck(req.body);
        await dataValidation(req.body);
        await passwordConfirmation(req.body.password, req.body.confirmPassword);
        const newUser = await createUser(req.body);
        await addMongoDocument(newUser);
        res.status(200).json({
            message: "User was sucessfully created",
            error: false
        });
    }
    catch (error) {
        res.status(error.httpStatus).json({
            message: error.message,
            error: true
        });
    }
});
export default router;
