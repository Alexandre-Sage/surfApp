import { connect } from "mongoose";
import { CustomError } from "../errors/errorClass";
export default async function fetchAllDocument(mongoSchema, researchObject, field, sortObject) {
    const errorKey = `${Object.keys(researchObject)[0]}`;
    const errorMessage = `${Object.keys(researchObject)[0]}: ${researchObject[errorKey]} not found please retry`;
    try {
        await connect(`${process.env.MONGO_ATLAS}`, {
            autoIndex: true,
        });
        const document = await mongoSchema.find(researchObject, field ? field : undefined).sort(sortObject ? sortObject : undefined);
        return new Promise((resolve, reject) => (document ? resolve(document) : reject(new CustomError(errorMessage, "FETCH ALL DOCUMENT ERROR", 400))));
    }
    catch (error) {
        console.error(error);
        return Promise.reject(new CustomError("Something wrong happened please retry ", "FETCH ALL DOCUMENT ERROR", 403));
    }
    ;
}
;
