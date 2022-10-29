import { addMongoDocument } from "../../../sharedModules/mongoDb/addMongoDocument";
import { notEmptyCheck } from "../../../sharedModules/dataValidation/notEmpty";
import { SpotInterface } from "../../../mongoDb/spots/spotInterface";
import { Spot } from "../../../mongoDb/spots/spots";
import { HydratedDocument } from "mongoose";


export default async function spotCreation(requestBody: SpotInterface, userId: any) {
  const { location, type, orientation, ...bodyCopy } = requestBody;
  try {
    //await notEmptyCheck(location)
    await notEmptyCheck(bodyCopy);
    const newSpot: HydratedDocument<SpotInterface> = new Spot<SpotInterface>({ ...requestBody, userId });
    const document = await addMongoDocument(newSpot);
    return document;
  } catch (error: any) {
    console.log({ error })
    throw error
  }
};