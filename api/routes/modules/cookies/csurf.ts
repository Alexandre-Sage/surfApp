import { Request } from "express";
import { Session } from "express-session";
import CustomError from "../../../modules/errors/errorClass";

const csurfCookieGenerator = async (req: Request, token: string, session: Session): Promise<Session> => {
    session.csurfToken = token;
    return new Promise((resolve: Function, reject: Function) => {
        session.save((err: any) => err ? reject(err) : resolve(true))
    })
};


async function csurfChecking(session: Session, req: Request): Promise<Boolean | Error> {
    const error: Error = new CustomError("Csurf cookie is not valid", 403)
    const requestCookie: string = req.signedCookies["CSRF-TOKEN"];
    const { csurfToken }: Session = session;
    return new Promise((resolve: Function, reject: Function): Boolean | Error => (
        csurfToken && requestCookie === session.csurfToken ? resolve(true) : reject(error)
    ));
}

export { csurfCookieGenerator, csurfChecking };
