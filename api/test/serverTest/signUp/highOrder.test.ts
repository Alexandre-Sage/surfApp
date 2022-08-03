import User from "../../../mongo/users/users";
import { connect, disconnect } from "mongoose";

export default describe("SIGN-UP ROUTES TEST", function () {
    before(async () => {
        await connect(`${process.env.MONGO_ATLAS}`, {
            autoIndex: true,
        }).then(() => User.deleteMany())
            .then((res: any) => console.log(res))
            .catch(err => console.error(err))

    });
    after(() => disconnect());
    require("./sucess/getCookie.test");
    require("./sucess/sucess.test");
    require("./errors/errorHighOrder.test");

    //require();
    //require();
});
