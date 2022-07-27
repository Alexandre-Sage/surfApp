import {missingWind} from "../sessionAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../modules/mongoValidationError.test";

export default describe("2.2) POST WITH EMPTY WIND",function(){
    mongoValidationError(addMongoEntries,missingWind,"wind.strength","required","It should return empty wind");
});
