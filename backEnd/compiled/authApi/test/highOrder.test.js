import "mocha";
import mongoose from "mongoose";
import { UserSchema } from "../../mongoDb/user/users.js";
import signUpTest from "./signUp/sucess/signUpSucess.test.js";
import dupEmailErrorTest from "./signUp/errors/dupEmail.test.js";
import dupUserNameErrorTest from "./signUp/errors/dupUsername.test.js";
import dupPhoneErrorTest from "./signUp/errors/dupPhone.test.js";
import invalidEmailErrorTest from "./signUp/errors/invalidMail.test.js";
import invalidPhoneErrorTest from "./signUp/errors/invalidPhone.test.js";
import missingEmailErrorTest from "./signUp/errors/missingEmail.test.js";
import missingPasswordErrorTest from "./signUp/errors/missingPassword.test.js";
import missingPhoneErrorTest from "./signUp/errors/missingPhone.test.js";
import missingUserNameErrorTest from "./signUp/errors/missingUserName.test.js";
import passwordConfirmationErrorTest from "./signUp/errors/passwordConfirmationError.test.js";
import loginSucessTest from "./loginOld/sucess/loginSucess.test.js";
import loginMissingEmailErrorTest from "./loginOld/error/emptyEmail.test.js";
import loginMissingPasswordErrorTest from "./loginOld/error/emptyPassword.test.js";
import loginInvalidEmailErrorTest from "./loginOld/error/invalidEmail.test.js";
import logInWrongEmailErrorTest from "./loginOld/error/wrongEmail.test.js";
import logInWrongPassworeErrorTest from "./loginOld/error/wrongPassword.test.js";
const db = mongoose.createConnection(`${process.env.MONGO_ATLAS}`, {
    autoIndex: true,
});
db.model("User", UserSchema);
//console.log(db)
describe("################################## AUTH API TEST SUITE ##################################", async function () {
    before(async () => {
        console.log("before");
        try {
            await db.models.User.deleteMany();
        }
        catch (error) {
            throw error;
        }
        ;
    });
    describe("I) SIGN UP ROUTES TEST SUITE", function () {
        signUpTest();
        dupUserNameErrorTest();
        missingUserNameErrorTest();
        invalidEmailErrorTest();
        missingEmailErrorTest();
        dupEmailErrorTest();
        dupPhoneErrorTest();
        invalidPhoneErrorTest();
        missingPhoneErrorTest();
        missingPasswordErrorTest();
        passwordConfirmationErrorTest();
    });
    describe("II) LOG IN ROUTES TEST SUITE", function () {
        loginSucessTest();
        loginMissingPasswordErrorTest();
        logInWrongPassworeErrorTest();
        loginMissingEmailErrorTest();
        loginInvalidEmailErrorTest();
        logInWrongEmailErrorTest();
    });
});
