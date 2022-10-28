import mongoose, { connect, disconnect, HydratedDocument } from "mongoose";
import { CustomError } from "../errors/errorClass";

console.log("getAllDocument modified not tested")
export default async function fetchAllDocument(mongoSchema: any, researchObject: object, field?: object, sortObject?: object): Promise<Document> {
    type ObjectKey = keyof typeof researchObject;
    const errorKey = `${Object.keys(researchObject)[0]}` as ObjectKey;
    const errorMessage = `${Object.keys(researchObject)[0]}: ${researchObject[errorKey]} not found please retry`;
    try {
        await connect(`${process.env.MONGO_ATLAS}`, {
            autoIndex: true,
        });
        const document = await mongoSchema.find(researchObject, field ? field : undefined).sort(sortObject ? sortObject : undefined);
            return document ? Promise.resolve(document) : Promise.reject(new CustomError(
                errorMessage, 
                "FETCH ALL DOCUMENT ERROR", 
                400
            ));
        
    } catch (error: any) {
        console.error(error)
        return Promise.reject(new CustomError("Something wrong happened please retry ", "FETCH ALL DOCUMENT ERROR", 403))
    };
};


