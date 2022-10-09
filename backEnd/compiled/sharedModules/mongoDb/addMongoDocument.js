import { connect } from "mongoose";
import { CustomError } from "../errors/errorClass";
const { log } = console;
function mongoErrorHandling(error, reject) {
    //console.log("here", error)
    switch (error.code) {
        case 11000:
            const fieldValue = Object.entries(error.keyValue)[0];
            const ReturnedError = new CustomError(`The ${fieldValue[0]} ${fieldValue[1]} is already used.`, "ADD MONGO DOCUMENT ERROR", 400);
            reject(ReturnedError);
            break;
    }
    ;
}
;
export default async function addMongoDocument(mongoSchema) {
    return new Promise(async function (resolve, reject) {
        try {
            await connect(`${process.env.MONGO_ATLAS}`, {
                autoIndex: true,
            });
            await mongoSchema.save();
            resolve(true);
        }
        catch (error) {
            console.log("here", error);
            if (error.name === "MongoServerError")
                mongoErrorHandling(error, reject);
            else if (error)
                reject(new CustomError("Something wrong happened please retry", "ADD MONGO DOCUMENT ERROR", 400));
            else
                reject(new CustomError("Something wrong happened please retry", "ADD MONGO DOCUMENT ERROR", 403));
        }
    });
}
