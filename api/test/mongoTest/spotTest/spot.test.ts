import {newSpot} from "./spotAssets";
import addMongoEntries from "../../../mongo/modules/addMongoEntries";
import addEntryToDataBaseTest from "../modules/addEntryToDataBase.test";

export default describe("1.1) ADD SPOT TO DB WITHOUT ERROR",function(){
    addEntryToDataBaseTest(addMongoEntries,newSpot ,"spot");
});
