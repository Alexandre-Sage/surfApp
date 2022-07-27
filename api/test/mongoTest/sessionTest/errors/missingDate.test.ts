import {missingDate} from "../sessionAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../modules/mongoValidationError.test";

export default describe("2.1) POST WITH EMPTY COUNTRY",function(){
    mongoValidationError(addMongoEntries,missingDate,"date","required","It should return empty date");
});
