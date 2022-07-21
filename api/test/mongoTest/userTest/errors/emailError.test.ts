import {emailDup} from "../usersAssets";
import mongoErrorTest from "../../modules/mongoError.test";
import addMongoEntries from "../../../../mongo/modules/addMongoEntries";

export default describe("2.2) POST WITH DUPLICATE EMAIL",function(){
    mongoErrorTest(addMongoEntries,emailDup,"email",11000,"It should return duplicate email");
});
