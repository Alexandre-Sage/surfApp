import {emptyLocation} from "../spotAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../modules/mongoValidationError.test";

export default describe("2.1) POST WITH EMPTY LOCATION",function(){
    mongoValidationError(addMongoEntries,emptyLocation,"location","required","It should return empty location");
});
