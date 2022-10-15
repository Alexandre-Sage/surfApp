import { HydratedDocument } from "mongoose";
import { UserInterface } from "../../../../mongoDb/user/userInterface.js";
import { User } from "../../../../mongoDb/user/users.js";
import { CustomError } from "../../../../sharedModules/errors/errorClass.js";

export default async function createUser(newUserBody: UserInterface): Promise<UserInterface | Error> {
    const newUser = new User<UserInterface>(newUserBody);
    return newUser.hashPassword(newUserBody.password)
        .then(() => newUser)
        .catch(() => new CustomError(
            "Something wrong happen please try again.",
            "USER HASH PASSWORD ERROR",
            400
        )
        );
};
