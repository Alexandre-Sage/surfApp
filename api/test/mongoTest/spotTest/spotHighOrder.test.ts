import {Spot} from "../../../mongo/spots/spots";
import {connect,disconnect} from "mongoose";
///////////////

export default describe("II) SPOT SCHEMA TEST",function(){
    before(async()=>{
        await connect(`${process.env.MONGO_DB}`)
        .then(()=>Spot.deleteMany())
        .catch(err=>console.log(err))
        .finally(()=>disconnect())
    });
    describe("1) CREATE NEW SPOT",function(){
        require("./spot.test");
    });
    describe("2) SPOT CREATION ERROR",function(){
        require("./errors/emptyLocation.test");
        //require("./errors/emailError.test");
        //require("./errors/phoneError.test");
    });
});
