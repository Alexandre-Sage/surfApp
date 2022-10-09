import dotenv from "dotenv";
import { connect, disconnect, MongooseError } from "mongoose";
import { MongoServerError } from "mongodb";
import { CustomError } from "../errors/errorClass.js";
const { log } = console;
dotenv.config()
function mongoErrorHandling(error: MongoServerError, reject: Function) {
    //console.log("here", error)
    switch (error.code) {
        case 11000:
            const fieldValue = Object.entries(error.keyValue)[0];
            const ReturnedError = new CustomError(
                `The ${fieldValue[0]} ${fieldValue[1]} is already used.`,
                "ADD MONGO DOCUMENT ERROR SWITCH",
                400
            );
            reject(ReturnedError);
            break;
    };
};


export default async function addMongoDocument(mongoSchema: any): Promise<boolean | MongooseError | void> {
    return new Promise(async function (resolve: Function, reject: Function) {
        try {
            await connect(`${process.env.MONGO_ATLAS}`, {
                autoIndex: true,
            });
            await mongoSchema.save();
            resolve(true)
        } catch (error: any) {
            console.log("here", error)
            if (error.name === "MongoServerError") mongoErrorHandling(error, reject)
            else if (error) { console.error(error); reject(new CustomError("Something wrong happened please retry", "ADD MONGO DOCUMENT ERROR", 400)) }
            else reject(new CustomError("Something wrong happened please retry", "ADD MONGO DOCUMENT ERROR", 403))
        }
    });
}
