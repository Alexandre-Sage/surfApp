import {userOne} from "./usersAssets";
import addMongoEntries from "../../../mongo/modules/addMongoEntries";
import addEntryToDataBaseTest from "../modules/addEntryToDataBase.test";

export default describe("1.1) ADD USER TO DB WITHOUT ERROR",function(){
    addEntryToDataBaseTest(addMongoEntries,userOne,"user");
});
