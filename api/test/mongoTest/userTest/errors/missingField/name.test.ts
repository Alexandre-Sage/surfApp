import {missingName} from "../../usersAssets";
import addMongoEntries from "../../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../../modules/mongoValidationError.test";

export default describe("2.6) POST WITH EMPTY NAME",function(){
    mongoValidationError(addMongoEntries,missingName,"name","required","It should return empty firstName");
});
