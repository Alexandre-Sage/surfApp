import { connect } from "mongoose";
import { PictureObject } from "../../../../mongoDb/generalInterface/pictureObjectInterface";
import {CustomError} from "../../../../sharedModules/errors/errorClass";

export default async function addPicturePathToDb(session: any, mongoSchema: any, pictureObject: PictureObject) {
    try {
        await connect(`${process.env.MONGO_ATLAS}`, {
            autoIndex: true,
        });
        await mongoSchema.updateOne({ _id: session.userId }, { $push: { picture: pictureObject } });
        Promise.resolve(true)
    } catch (error: any) {
        Promise.reject(new CustomError("Something wrong happened please try again", "ADD PICTURE PATH TO DB", 500))
    };
};