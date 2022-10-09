import { WaveTypeObject } from "../generalInterface/WaveTypeInterface";
import { OptimalConditionsObj } from "../generalInterface/optimalConditionInterface";
import { GeoJsonObject } from "../generalInterface/geoJsonInterface"
import { PictureObject } from "../generalInterface/pictureObjectInterface"
import { Document } from "mongoose";
export interface SpotInterface {
    userId: String,
    spotName: String,
    country: String,
    type: WaveTypeObject,
    location: GeoJsonObject,
    orientation: Array<String>,
    optimalConditions: Array<OptimalConditionsObj>,
    sessions: Array<String>,
    creationDate: Date,
    picture: PictureObject,
    save: () => Promise<Document<unknown, any, SpotInterface>>
}
