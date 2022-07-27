import {emptyCountry} from "../spotAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../modules/mongoValidationError.test";

export default describe("2.4) POST WITH EMPTY COUNTRY",function(){
    mongoValidationError(addMongoEntries,emptyCountry,"country","required","It should return empty country");
});
