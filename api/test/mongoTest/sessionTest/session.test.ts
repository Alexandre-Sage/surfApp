import {newSession} from "./sessionAssets";
import addMongoEntries from "../../../mongo/modules/addMongoEntries";
import addEntryToDataBaseTest from "../modules/addEntryToDataBase.test";

export default describe("1) ADD SPOT TO DB WITHOUT ERROR",function(){
    addEntryToDataBaseTest(addMongoEntries,newSession ,"session");
});
