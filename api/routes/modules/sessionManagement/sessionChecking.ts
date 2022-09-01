import { Session } from "express-session";
import { Request } from "express";
import CustomError from "../../../modules/errors/errorClass";

export default function sessionChecking(req: Request, session: Session): Promise<boolean | Error> {
    const error = new CustomError(" Session Something wrong happened please retry.", 403);
    return new Promise((resolve: Function, reject: Function) => (
        session.sessionToken && req.signedCookies["SESSION-TOKEN"] === session.sessionToken ? resolve(true) : reject(error)
    ));
}