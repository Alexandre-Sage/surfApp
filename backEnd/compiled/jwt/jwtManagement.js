import jwt from "jsonwebtoken";
import { CustomError } from "../errors/errorClass";
;
export const setSessionToken = (data, secret, expiresDate) => (jwt.sign(data, secret, { expiresIn: expiresDate }));
export const sessionTokenAuthentification = async (jsonWebToken, secret) => {
    const jwtError = new CustomError("DEV JWT CHECK ERROR", "Something went wrong please retry", 403);
    return jwt.verify(jsonWebToken, secret, (error, sucess) => (error ? Promise.reject(jwtError) : Promise.resolve(sucess)));
};
