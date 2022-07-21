import {phoneDup} from "../usersAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoErrorTest from "../../modules/mongoError.test";

export default describe("2.3) POST WITH DUPLICATE PHONE",function(){
    mongoErrorTest(addMongoEntries,phoneDup,"phone",11000,"It should return duplicate phone");
});
