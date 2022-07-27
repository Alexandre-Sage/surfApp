import {missingEmail} from "../../usersAssets";
import addMongoEntries from "../../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../../modules/mongoValidationError.test";

export default describe("2.5) POST WITH EMPTY EMAIL",function(){
    mongoValidationError(addMongoEntries,missingEmail,"email","required","It should return empty firstName");
});
