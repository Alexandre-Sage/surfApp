import {missingPhone} from "../../usersAssets";
import addMongoEntries from "../../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../../modules/mongoValidationError.test";

export default describe("2.7) POST WITH EMPTY PHONE",function(){
    mongoValidationError(addMongoEntries,missingPhone,"phone","required","It should return empty Phone");
});
