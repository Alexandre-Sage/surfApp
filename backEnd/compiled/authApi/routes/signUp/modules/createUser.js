import User from "../../../../mongoDb/user/users.js";
import { CustomError } from "../../../../sharedModules/errors/errorClass.js";
export default async function createUser(newUserBody) {
    const newUser /*:HydratedDocument<UserInterface>*/ = new User(newUserBody);
    return newUser.hashPassword(newUserBody.password)
        .then(() => newUser)
        .catch(() => new CustomError("Something wrong happen please try again.", "USER HASH PASSWORD ERROR", 400));
}
;
