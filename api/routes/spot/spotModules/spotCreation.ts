import addMongoEntries from "../../../mongo/modules/addMongoEntries";
import notEmptyCheck from "../../modules/dataValidation/notEmpty";
import { SpotInterface } from "../../../mongo/mongoInterfaces/spotInterface";
import { Spot } from "../../../mongo/spots/spots"
import { HydratedDocument } from "mongoose";


export default async function spotCreation(requestBody: SpotInterface) {
    const { location, type, orientation, ...bodyCopy } = requestBody;
    try {
        await notEmptyCheck(location)
        await notEmptyCheck(bodyCopy);
        const newSpot: HydratedDocument<SpotInterface> = new Spot<SpotInterface>(requestBody);
        const document = await addMongoEntries(newSpot);
        console.log(document)
        return document;
    } catch (error: any) {
        throw error
    }
};
