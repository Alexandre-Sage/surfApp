import { UserInterface } from "../../../../mongoDb/user/userInterface.js";
import { User } from "../../../../mongoDb/user/users.js";
import fetchOneDocument from "../../../../sharedModules/mongoDb/getOneDocument.js";
import { setSessionToken } from "../../../../sharedModules/jwt/jwtManagement.js";

import { CustomError } from "../../../../sharedModules/errors/errorClass.js";

interface AuthentificationInterface {
    sessionToken: string,
    userName: string
}

export const createAuthentification = async (password: string, email: string): Promise<AuthentificationInterface> => {
    const researchObject = { email: email };
    try {
        const user: UserInterface = await fetchOneDocument(User, researchObject);
        const tokenExpirations = "3600 * 24";
        await user.checkPassword(password);
        const tokenData = {
            userId: user._id,
            userName: user.userName,
        };
        return {
            sessionToken: setSessionToken(tokenData, process.env.JWT_SECRET!, tokenExpirations),
            userName: user.userName
        };
    } catch (error: any) {
        return error
    };
};