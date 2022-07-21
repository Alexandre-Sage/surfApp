import {SwellObject} from "./swellInterface";
import {WindObject} from "./windInterface";

export interface SessionInterface{
    date:Date,
    spot:String,
    userName:String,
    startTime:Date,
    endTime:Date,
    totalTime:Date,
    swell:SwellObject,
    wind:WindObject,
    comment:String
};
