import { connect, disconnect, MongooseError } from "mongoose";
import CustomError from "../../modules/errors/errorClass";
import { MongoServerError } from "mongodb";
const { log } = console;

function mongoErrorHandling(error: MongoServerError, reject: Function) {
    console.log("here", error)
    switch (error.code) {
        case 11000:
            const fieldValue = Object.entries(error.keyValue)[0];
            const ReturnedError = new CustomError(`The ${fieldValue[0]} ${fieldValue[1]} is already used.`, 400);
            reject(ReturnedError);
            break;
    };
};


export default async function addMongoEntries(mongoSchema: any): Promise<boolean | MongooseError | void> {
    return new Promise(async function (resolve: Function, reject: Function) {
        try {
            await connect(`${process.env.MONGO_ATLAS}`, {
                autoIndex: true,
            });
            await mongoSchema.save();
            resolve(true)
        } catch (error: any) {
            if (error.name === "MongoServerError") mongoErrorHandling(error, reject)
            else if (error) reject(new CustomError("Something wrong happened please retry", 403))
        }
    });
}
