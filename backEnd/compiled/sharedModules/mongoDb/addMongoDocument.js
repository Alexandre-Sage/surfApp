import dotenv from "dotenv";
import { connect } from "mongoose";
import { CustomError } from "../errors/errorClass.js";
const { log } = console;
dotenv.config();
function mongoErrorHandling(error, reject) {
    switch (error.code) {
        case 11000:
            const fieldValue = Object.entries(error.keyValue)[0];
            const ReturnedError = new CustomError(`The ${fieldValue[0]} ${fieldValue[1]} is already used.`, "ADD MONGO DOCUMENT ERROR SWITCH", 400);
            reject(ReturnedError);
            break;
    }
    ;
}
;
export default async function addMongoDocument(mongoSchema) {
    return new Promise(async function (resolve, reject) {
        try {
            await connect(`mongodb+srv://AlexandreSage:Alexandretroisdemacedoinelegrand@cluster0.adoon.mongodb.net/surfApp?retryWrites=true&w=majority`, {
                autoIndex: true,
            }); //.then(()=>mongoSchema.save().catch((err:any)=>console.log(err)))
            await mongoSchema.save();
            resolve(true);
        }
        catch (error) {
            //console.log("here", error)
            if (error.name === "MongoServerError")
                mongoErrorHandling(error, reject);
            else if (error) {
                console.error(error);
                reject(new CustomError("Something wrong happened please retry", "ADD MONGO DOCUMENT ERROR", 400));
            }
            else
                reject(new CustomError("Something wrong happened please retry", "ADD MONGO DOCUMENT ERROR", 403));
        }
    });
}
