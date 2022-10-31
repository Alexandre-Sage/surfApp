import { UserInterface } from "../../../../mongoDb/user/userInterface";
import { User } from "../../../../mongoDb/user/users";
import { fetchOneDocument } from "../../../../sharedModules/mongoDb/getOneDocument";
import { setSessionToken } from "../../../../sharedModules/jwt/jwtManagement";

import { CustomError } from "../../../../sharedModules/errors/errorClass";
import { Types } from "mongoose";

interface AuthentificationInterface {
  sessionToken: string,
  userName: string
}



export const createAuthentification = async (password: string, email: string): Promise<AuthentificationInterface> => {
  const researchObject = { email: email };
  try {
    const user: UserInterface = await fetchOneDocument(User, researchObject);
    const tokenExpirations = `${3600 * 24 * 10}s`;
    await user.checkPassword(password);
    const tokenData = {
      userId: user._id,
      userName: user.userName,
    };
    return {
      sessionToken: setSessionToken(tokenData, tokenExpirations),
      userName: user.userName
    };
  } catch (error: any) {
    return Promise.reject(error)
  };
};