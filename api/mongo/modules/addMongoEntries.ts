import { connect, disconnect, MongooseError } from "mongoose";
import CustomError from "../../modules/errors/errorClass";
import { MongoServerError } from "mongodb";
const { log } = console;


export default async function addMongoEntries(mongoSchema: any): Promise<boolean | MongooseError | void> {
    connect(`${process.env.MONGO_ATLAS}`, {
        autoIndex: true,
    }).catch((err: any) => log(err))
    return new Promise(async (resolve: Function, reject: Function) => (
        await mongoSchema.save((err: MongoServerError, conn: any) => {
            if (err && err.name === "MongoServerError") {
                switch (err.code) {
                    case 11000:
                        const fieldValue = Object.entries(err.keyValue)[0];
                        const error = new CustomError(`The ${fieldValue[0]} ${fieldValue[1]} is already used.`, 400);
                        reject(error);
                        break;
                }
            } else if (conn) {
                resolve(true)
            };
        })
    )).then(() => disconnect());
}
