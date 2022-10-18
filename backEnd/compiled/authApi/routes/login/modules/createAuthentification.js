import { User } from "../../../../mongoDb/user/users.js";
import fetchOneDocument from "../../../../sharedModules/mongoDb/getOneDocument.js";
import { setSessionToken } from "../../../../sharedModules/jwt/jwtManagement.js";
export const createAuthentification = async (password, email) => {
    const researchObject = { email: email };
    try {
        const user = await fetchOneDocument(User, researchObject);
        const tokenExpirations = `${3600 * 24}s`;
        await user.checkPassword(password);
        const tokenData = {
            userId: user._id,
            userName: user.userName,
        };
        return {
            sessionToken: setSessionToken(tokenData, tokenExpirations),
            userName: user.userName
        };
    }
    catch (error) {
        return Promise.reject(error);
    }
    ;
};
