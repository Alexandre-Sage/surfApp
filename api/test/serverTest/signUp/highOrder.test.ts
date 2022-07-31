import User from "../../../mongo/users/users";
import {connect,disconnect} from "mongoose";

export default describe("SIGN-UP ROUTES TEST",function(){
    /*before(()=>{
        connect(`${process.env.MONGO_DB}`)
        User.deleteMany()
        disconnect()
        //done()

    });*/
    require("./sucess/getCookie.test");
    require("./sucess/sucess.test");
    require("./errors/errorHighOrder.test");

    //require();
    //require();
});
