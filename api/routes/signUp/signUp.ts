import express, { Request, Response } from "express";
import notEmptyCheck from "../modules/dataValidation/notEmpty";
import addMongoEntries from "../../mongo/modules/addMongoEntries";
import createUser from "./modules/createUser";
import { tokenGenerator } from "../modules/cookies/general";
import { csurfCookieGenerator, csurfChecking } from "../modules/cookies/csurf";

const router = express.Router();


router.post("/", async function (req: Request, res: Response) {
    console.log(req.body)
    const session = req.session;
    const bodyCopy = { ...req.body };
    delete bodyCopy.picture;
    const createUserPromiseArray = [csurfChecking(session, req), notEmptyCheck(bodyCopy), createUser(req.body)];
    await Promise.all(createUserPromiseArray)
        .then((resolved: Array<any>) => addMongoEntries(resolved[2]))
        .then(() => res.status(200).json({
            message: "User was sucessfully created",
            error: false
        }))
        .catch((err) => res.status(err.httpStatus).json({
            message: err.message,
            error: true
        }))
});

export default router;
