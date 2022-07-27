import {missingFirstName} from "../../usersAssets";
import addMongoEntries from "../../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../../modules/mongoValidationError.test";

export default describe("2.4) POST WITH EMPTY FIRST NAME",function(){
    mongoValidationError(addMongoEntries,missingFirstName,"firstName","required","It should return empty firstName");
});
