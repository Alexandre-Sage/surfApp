import "mocha";
import mongoose from "mongoose";
import { User, UserSchema } from "../../mongoDb/user/users.js";
import signUpTest from "./signUp/signUpHighOrder.test.js";

const db = await mongoose.createConnection(`${process.env.MONGO_ATLAS}`, {
    autoIndex: true,
});
console.log(process.env.MONGO_ATLAS)
db.model("User", UserSchema);
describe("#################AUTH API TEST SUITE#################", function () {
    before(async () => {
        await User.deleteMany()

    });
    //  it("SHOULD TEST AUTH API", () =>{});
    it("",()=>{})
    this.addSuite(signUpTest)
});