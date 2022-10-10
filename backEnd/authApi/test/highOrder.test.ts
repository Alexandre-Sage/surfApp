import "mocha";
import mongoose from "mongoose";
import { User, UserSchema } from "../../mongoDb/user/users.js";
import signUpTest from "./signUp/sucess/signUpSucess.test.js";
import dupEmailErrorTest from "./signUp/errors/dupEmail.test.js"
import dupUserNameErrorTest from "./signUp/errors/dupUsername.test.js";
import dupPhoneErrorTest from "./signUp/errors/dupPhone.test.js";
import invalidEmailErrorTest from "./signUp/errors/invalidMail.test.js";
import invalidPhoneErrorTest from "./signUp/errors/invalidPhone.test.js";
import missingEmailErrorTest from "./signUp/errors/missingEmail.test.js";
import missingPasswordErrorTest from "./signUp/errors/missingPassword.test.js";
import missingPhoneErrorTest from "./signUp/errors/missingPhone.test.js";
import missingUserNameErrorTest from "./signUp/errors/missingUserName.test.js";
import passwordConfirmationErrorTest from "./signUp/errors/passwordConfirmationError.test.js";

const db =  mongoose.createConnection(`${process.env.MONGO_ATLAS}`, {
    autoIndex: true,
});
db.model("User", UserSchema);
//console.log(db)
describe("################################## AUTH API TEST SUITE ##################################", async function () {
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
        dupPhoneErrorTest();
        invalidEmailErrorTest();
        invalidPhoneErrorTest();
        missingEmailErrorTest();
        missingPasswordErrorTest();
        missingPhoneErrorTest();
        missingUserNameErrorTest();
        passwordConfirmationErrorTest();
    });
});