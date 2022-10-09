import "mocha";
import mongoose from "mongoose";
import { User, UserSchema } from "../../mongoDb/user/users.js";
import signUpTest from "./signUp/signUpHighOrder.test.js";

const db = await mongoose.createConnection(`${process.env.MONGO_ATLAS}`, {
    autoIndex: true,
})
//db.model("User", UserSchema);
console.log(db)
describe("#################AUTH API TEST SUITE#################", function () {
    before(async () => {
        console.log("before")
        await User.deleteMany()
            .then((res: any) => res)
            .catch((err: any) => console.error(err))

    });
    //after(() => disconnect());
    it("", () => { })
    signUpTest
});