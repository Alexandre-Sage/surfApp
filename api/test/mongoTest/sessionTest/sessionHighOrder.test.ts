import {Session} from "../../../mongo/sessions/sessions";
import {connect,disconnect} from "mongoose";
///////////////

export default describe("III) SESSION SCHEMA TEST",function(){
    before(async()=>{
        await connect(`${process.env.MONGO_DB}`)
        .then(()=>Session.deleteMany())
        .catch(err=>console.log(err))
        .finally(()=>disconnect())
    });
    describe("1) CREATE NEW SESSION",function(){
        require("./session.test");
    });
    describe("2) SPOT CREATION ERROR",function(){
        require("./errors/missingDate.test");
        require("./errors/missingSpot.test");
        require("./errors/missingUserName.test");
        require("./errors/missingSwell.test");
        require("./errors/missingWind.test");
    });
});
