import User from "../../../mongoDb/user/users.js";
import { connect, disconnect } from "mongoose";
export default describe("I) SIGN-UP ROUTES TEST", function () {
    before(async () => {
        await connect(`${process.env.MONGO_ATLAS}`, {
            autoIndex: true,
        }).then(() => User.deleteMany())
            .then((res) => res)
            .catch(err => console.error(err));
    });
    after(() => disconnect());
    require("./sucess/signUpSucess.test");
    //require("./errors/errorHighOrder.test");
});
