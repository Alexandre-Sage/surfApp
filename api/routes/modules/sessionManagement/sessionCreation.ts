import { Session } from "express-session";

export const sessionCreation = async (session: Session, sessionToken: string) => {
    session.sessionToken = sessionToken;
    session.save()
};
