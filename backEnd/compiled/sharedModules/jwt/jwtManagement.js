import jwt from "jsonwebtoken";
import { CustomError } from "../errors/errorClass.js";
;
export const setSessionToken = (data, expiresDate) => (jwt.sign(data, process.env.JWT_SECRET, { expiresIn: expiresDate }));
export const sessionTokenAuthentification = async (jsonWebToken) => {
    const jwtError = new CustomError("DEV JWT CHECK ERROR", "Something went wrong please retry", 403);
    return jwt.verify(jsonWebToken, process.env.JWT_SECRET, (error, sucess) => (error ? Promise.reject(jwtError) : Promise.resolve(sucess)));
};
export const getToken = (req) => req.headers.authorization.split(" ")[1];
