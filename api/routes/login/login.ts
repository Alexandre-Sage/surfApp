import express, { Request, Response } from "express";
import { tokenGenerator } from "../modules/cookies/general";
import { csurfCookieGenerator, csurfChecking } from "../modules/cookies/csurf";

import { UserInterface } from "../../mongo/mongoInterfaces/userInterface";
import User from "../../mongo/users/users";
import CustomError from "../../modules/errors/errorClass";

import { connect, disconnect } from "mongoose"
const router = express.Router();
const { log, table } = console;

router.post("/", async function (req: Request, res: Response) {
    const session = req.session;
    const { userName, password } = req.body;
    async function fetchFromDb(mongoSchema: any, researchObject: object) {
        await connect(`${process.env.MONGO_ATLAS}`, {
            autoIndex: true,
        })
        return await mongoSchema.findOne(researchObject)
            .then((user: UserInterface) => user)
            .catch((err: Error) => err)
            .finally(() => disconnect());
    };
    const researchObject = { userName: userName }
    await fetchFromDb(User, researchObject)
        .then(async (user: any) => {
            const passwordCheck = await user.checkPassword(password)
            return passwordCheck ? user : passwordCheck
        })
        .then((user: any) => log("usssssss", user._id))
        .catch((err: any) => log("eeeerrrrrrr", err))
    //const test = await user.checkPassword(password).then((res: any) => res).catch((err: any) => err)
    //log(user)
    //log(test)
    res.status(200).json({})
});


export default router;