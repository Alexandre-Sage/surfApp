import "mocha";
import mongoose from "mongoose";
import { User, UserSchema } from "../../mongoDb/user/users.js";
import signUpTest from "./signUp/sucess/signUpSucess.test.js";
import dupEmailErrorTest from "./signUp/errors/dupEmail.test.js"
import dupUserNameErrorTest from "./signUp/errors/dupUsername.test.js";

const db =  mongoose.createConnection(`${process.env.MONGO_ATLAS}`, {
    autoIndex: true,
});
db.model("User", UserSchema);
//console.log(db)
describe("##################################AUTH API TEST SUITE##################################", async function () {
    before(async () => {
        console.log("before")
        try{
            await db.models.User.deleteMany()

        }catch(error){throw error}

    });
    describe("1) SIGN UP ROUTES TEST SUITE",function(){
        signUpTest();
        dupEmailErrorTest();
        dupUserNameErrorTest();
    });
});