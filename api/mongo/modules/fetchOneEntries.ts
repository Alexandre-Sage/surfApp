import { connect, disconnect } from "mongoose";
import CustomError from "../../modules/errors/errorClass";

export default async function fetchOneEntriesFromDb(mongoSchema: any, researchObject: object) {
    type ObjectKey = keyof typeof researchObject;
    const errorKey = `${Object.keys(researchObject)[0]}` as ObjectKey;
    const errorMessage = `${Object.keys(researchObject)[0]}: ${researchObject[errorKey]} not found please retry`;
    await connect(`${process.env.MONGO_ATLAS}`, {
        autoIndex: true,
    });
    const document = await mongoSchema.findOne(researchObject);
    return new Promise((resolve: Function, reject: Function) => (
        document ? resolve(document) : reject(new CustomError(errorMessage, 400))
    ));
};


