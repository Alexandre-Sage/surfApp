import {emptyUserId} from "../spotAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../modules/mongoValidationError.test";

export default describe("2.2) POST WITH EMPTY USER ID",function(){
    mongoValidationError(addMongoEntries,emptyUserId,"userId","required","It should return empty userId");
});
