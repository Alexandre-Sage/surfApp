import User from "../../../../mongoDb/user/users";
import fetchOneDocument from "../../../../sharedModules/mongoDb/getOneDocument";
import { setSessionToken } from "../../../../sharedModules/jwt/jwtManagement";
export const createAuthentification = async (password, email) => {
    const researchObject = { email: email };
    try {
        const user = await fetchOneDocument(User, researchObject);
        const tokenExpirations = "3600 * 24";
        await user.checkPassword(password);
        const tokenData = {
            userId: user._id,
            userName: user.userName,
        };
        return {
            sessionToken: setSessionToken(tokenData, process.env.JWT_SECRET, tokenExpirations),
            userName: user.userName
        };
    }
    catch (error) {
        return error;
    }
    ;
};
