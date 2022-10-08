import jwt,{ JwtHeader, JwtPayload } from "jsonwebtoken";
import { CustomError } from "../errors/errorClass"
interface UserJsonDataInterface{ 

};

export const setSessionToken = ( data:any, secret:string, expireDate:string ) => (
    jwt.sign(data, secret,{ expiresIn: expireDate } )
);

export const sessionTokenAuthentification = async ( jsonWebToken:string, secret:string ):
Promise<any> =>{
    const error=  new CustomError( 
        process.env.NODE_ENV === "developpment" ? "JWT CHECK ERROR" : "Something went wrong please retry",
        403
    );
    return jwt.verify(jsonWebToken,secret,(error, sucess):Promise<Boolean |CustomError> => (
          error? Promise.reject( error ) : Promise.resolve( true )
    ));
} ;