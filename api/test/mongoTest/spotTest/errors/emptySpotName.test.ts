import {emptySpotName} from "../spotAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../modules/mongoValidationError.test";

export default describe("2.5) POST WITH EMPTY SPOT NAME",function(){
    mongoValidationError(addMongoEntries,emptySpotName,"spotName","required","It should return empty spotName");
});
