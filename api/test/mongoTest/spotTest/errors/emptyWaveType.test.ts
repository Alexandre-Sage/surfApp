import {emptyWaveType} from "../spotAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoValidationError from "../../modules/mongoValidationError.test";

export default describe("2.3) POST WITH EMPTY WAVE TYPE",function(){
    mongoValidationError(addMongoEntries,emptyWaveType,"type.waveType","required","It should return empty waveType");
});
