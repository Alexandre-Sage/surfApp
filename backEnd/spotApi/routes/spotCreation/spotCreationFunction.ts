import { addMongoDocument } from "../../../sharedModules/mongoDb/addMongoDocument";
import { notEmptyCheck } from "../../../sharedModules/dataValidation/notEmpty";
import { SpotInterface } from "../../../mongoDb/spots/spotInterface";
import { Spot } from "../../../mongoDb/spots/spot";
import { HydratedDocument } from "mongoose";
import validator from "validator"
export const spotValidatior = async (requestBody: SpotInterface): Promise<boolean> => {
  const { location, type, orientation, sessions, optimalConditions, ...bodyCopy } = requestBody;
  const { isEmpty } = validator;
  const validationPromise = [notEmptyCheck(bodyCopy), notEmptyCheck(location.type), notEmptyCheck(type)]
  try {
    await Promise.all(validationPromise)
    location.coordinates.forEach(item => isEmpty(item as string))
    orientation.forEach(item => isEmpty(item as string));
    if (optimalConditions && optimalConditions.swell) {
      //await notEmptyCheck(optimalConditions.swell)
      //await notEmptyCheck(optimalConditions.wind)
    }
    return true
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}


export async function spotCreation(requestBody: SpotInterface, userId: any) {
  try {
    const newSpot: HydratedDocument<SpotInterface> = new Spot<SpotInterface>({
      ...requestBody,
      userId,
      creationDate: new Date(Date.now())
    });
    const document = await addMongoDocument(newSpot);
    return document;
  } catch (error: any) {
    console.log({ error })
    throw error
  }
};
