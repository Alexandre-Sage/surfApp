import {userNameDup} from "../usersAssets";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";
import mongoErrorTest from "../../modules/mongoError.test";

export default describe("2.1) POST WITH DUPLICATE USERNAME",function(){
    mongoErrorTest(addMongoEntries,userNameDup,"userName",11000,"It should return duplicate username");
});
