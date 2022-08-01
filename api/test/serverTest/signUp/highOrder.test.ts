import User from "../../../mongo/users/users";
import {connect,disconnect} from "mongoose";

export default describe("SIGN-UP ROUTES TEST",function(){
    before((done)=>{
        connect(`${process.env.MONGO_ATLAS}`,{
        autoIndex: true,
        }).then(() => User.deleteMany())
        .catch(err => done(err))
        done()
    });
    after(() =>disconnect());
    require("./sucess/getCookie.test");
    require("./sucess/sucess.test");
    require("./errors/errorHighOrder.test");

    //require();
    //require();
});
