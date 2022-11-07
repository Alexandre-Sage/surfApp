import mongoose, { connect, disconnect, HydratedDocument } from "mongoose";
import { CustomError } from "../errors/errorClass";

//635cf1f59deea638d72a793c console.log("getAllDocument modified not tested")
export async function fetchAllDocument(mongoSchema: any, researchObject: object, field?: object, sortObject?: object): Promise<Document> {
  console.log("all")
  type ObjectKey = keyof typeof researchObject;
  const errorKey = `${Object.keys(researchObject)[0]}` as ObjectKey;
  const errorMessage = `${Object.keys(researchObject)[0]}: ${researchObject[errorKey]} not found please retry`;
  try {
    await connect(`${process.env.MONGO_ATLAS}`, {
      autoIndex: true,
    });
    console.log("here")
    const document = await mongoSchema.find(researchObject, field ? field : undefined).sort(sortObject ? sortObject : undefined)
    console.log("document")
    return new Promise((resolve: Function, reject: Function) => (
      document ? resolve(document) : reject(new CustomError(errorMessage, "FETCH ALL DOCUMENT ERROR", 400))
    ));

  } catch (error: any) {
    console.error(error)
    return Promise.reject(new CustomError("Something wrong happened please retry ", "FETCH ALL DOCUMENT ERROR", 403))
  };
};


