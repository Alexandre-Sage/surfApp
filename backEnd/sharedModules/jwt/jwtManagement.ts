import jwt, { JwtHeader, JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";
import { CustomError } from "../errors/errorClass.js"
export interface UserJsonDataInterface {
    userId: Types.ObjectId,
    userName: string
};

export const setSessionToken = (data: UserJsonDataInterface, secret: string, expiresDate: string): string => (
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

