import {missingPassword} from "../../usersAssets";
import addMongoEntries from "../../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../../modules/mongoValidationError.test";

export default describe("2.8) POST WITH EMPTY PASSWORD",function(){
    mongoValidationError(addMongoEntries,missingPassword,"password","required","It should return empty Phone");
});
