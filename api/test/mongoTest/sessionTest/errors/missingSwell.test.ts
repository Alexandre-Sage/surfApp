import {missingSwell} from "../sessionAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../modules/mongoValidationError.test";

export default describe("2.4) POST WITH EMPTY SWELL",function(){
    mongoValidationError(addMongoEntries,missingSwell,"swell.size","required","It should return empty swell");
});
