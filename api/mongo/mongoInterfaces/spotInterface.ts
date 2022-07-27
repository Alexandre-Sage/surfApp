import {WaveTypeObject} from "./WaveTypeInterface";
import {OptimalConditionsObj} from "./optimalConditionInterface";
import {GeoJsonObject} from "./geoJsonInterface"

export interface SpotInterface{
    userId:String,
    spotName:String,
    country:String,
    type:WaveTypeObject,
    location:GeoJsonObject,
    orientation:Array<String>,
    optimalConditions:Array<OptimalConditionsObj>,
    sessions:Array<String>,
    creationDate:Date
}
