import { connect, disconnect } from "mongoose";
import CustomError from "../../modules/errors/errorClass";

export default async function fetchOneEntriesFromDb(mongoSchema: any, researchObject: object, field?: object, sortObject?: object): Promise<any> {
    type ObjectKey = keyof typeof researchObject;
    const errorKey = `${Object.keys(researchObject)[0]}` as ObjectKey;
    const errorMessage = `${Object.keys(researchObject)[0]}: ${researchObject[errorKey]} not found please retry`;
    try {
        await connect(`${process.env.MONGO_ATLAS}`, {
            autoIndex: true,
        });
        const document = await mongoSchema.findOne(researchObject, field ? field : undefined).sort(sortObject ? sortObject : undefined);
        return new Promise((resolve: Function, reject: Function) => (
            document ? resolve(document) : reject(new CustomError(errorMessage, 400))
        ));
    } catch (error: any) {
        return Promise.reject(new CustomError("Something wrong happened please retry ", 403))
    }
};


