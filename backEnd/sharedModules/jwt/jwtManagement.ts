import jwt, { JwtHeader, JwtPayload } from "jsonwebtoken";
import { CustomError } from "../errors/errorClass.js"
interface UserJsonDataInterface {

};

export const setSessionToken = (data: any, secret: string, expiresDate: string): string => (
    jwt.sign(data, secret, { expiresIn: expiresDate })
);

export const sessionTokenAuthentification = async (jsonWebToken: string, secret: string):
    Promise<void> => {
    const jwtError = new CustomError(
        "DEV JWT CHECK ERROR",
        "Something went wrong please retry",
        403
    );
    return jwt.verify(jsonWebToken, secret, (error, sucess)
        : Promise<string | JwtPayload | CustomError> => (
        error ? Promise.reject(jwtError) : Promise.resolve(sucess!)
    ));
};

