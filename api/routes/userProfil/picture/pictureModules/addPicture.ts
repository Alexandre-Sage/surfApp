import { connect } from "mongoose";
import { PictureObject } from "../../../../mongo/mongoInterfaces/pictureObjectInterface";
import { Session } from "express-session";
import CustomError from "../../../../modules/errors/errorClass";

export default async function addPicturePathToDb(session: Session, mongoSchema: any, pictureObject: PictureObject) {
    new Promise(async function (resolve: Function, reject: Function) {
        try {
            await connect(`${process.env.MONGO_ATLAS}`, {
                autoIndex: true,
            });
            await mongoSchema.updateOne({ _id: session.userId }, { $push: { picture: pictureObject } });
            resolve(true)
        } catch (error: any) {
            reject(new CustomError("Something wrong happened please try again", 500))
        };
    })

};