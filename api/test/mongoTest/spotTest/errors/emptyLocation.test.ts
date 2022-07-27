import {emptyLocationType} from "../spotAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../modules/mongoValidationError.test";

export default describe("2.1) POST WITH EMPTY LOCATION",function(){
    mongoValidationError(addMongoEntries,emptyLocationType,"location.type","required","It should return empty location");
});
