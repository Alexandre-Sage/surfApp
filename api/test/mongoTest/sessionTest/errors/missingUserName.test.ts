import {missingUserName} from "../sessionAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../modules/mongoValidationError.test";

export default describe("2.3) POST WITH EMPTY USER NAME",function(){
    mongoValidationError(addMongoEntries,missingUserName,"userName","required","It should return empty userName");
});
