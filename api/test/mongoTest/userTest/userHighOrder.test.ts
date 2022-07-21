import {User} from "../../../mongo/users/users";
import {connect,disconnect} from "mongoose";
///////////////

export default describe("I) USER SCHEMA TEST",function(){
    before(async()=>{
        await connect(`${process.env.MONGO_DB}`)
        .then(()=>User.deleteMany())
        .catch(err=>console.log(err))
        .finally(()=>disconnect())
    });
    describe("1) CREATE NEW USER",function(){
        require("./users.test");
    });
    describe("2) USER CREATION ERROR",function(){
        require("./errors/userNameError.test");
        require("./errors/emailError.test");
        require("./errors/phoneError.test");
    });
});
