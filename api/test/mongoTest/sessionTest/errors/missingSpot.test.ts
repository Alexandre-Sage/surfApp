import {missingSpot} from "../sessionAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../modules/mongoValidationError.test";

export default describe("2.2) POST WITH EMPTY SPOT NAME",function(){
    mongoValidationError(addMongoEntries,missingSpot,"spot","required","It should return empty spot");
});
