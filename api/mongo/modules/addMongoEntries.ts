import { connect, disconnect, MongooseError } from "mongoose";
import CustomError from "../../modules/errors/errorClass";
import { MongoServerError } from "mongodb";
const { log } = console;

function mongoErrorHandling(error: MongoServerError, reject: Function) {
    switch (error.code) {
        case 11000:
            const fieldValue = Object.entries(error.keyValue)[0];
            const ReturnedError = new CustomError(`The ${fieldValue[0]} ${fieldValue[1]} is already used.`, 400);
            reject(ReturnedError);
            break;
    };
};


export default async function addMongoEntries(mongoSchema: any): Promise<boolean | MongooseError | void> {
    await connect(`${process.env.MONGO_ATLAS}`, {
        autoIndex: true,
    });
    return new Promise(async (resolve: Function, reject: Function) => (
        mongoSchema.save((error: MongoServerError, documentSaved: any) => {
            if (error && error.name === "MongoServerError") {
                //log("mdb", err)
                mongoErrorHandling(error, reject)
            } else if (documentSaved) {
                resolve(true)
            };
        })
    )).then(() => disconnect());
}
