import { Session } from "express-session";
import { UserInterface } from "../../../mongo/mongoInterfaces/userInterface";

export const createSession = async (session: Session, sessionToken: string, user: UserInterface) => {
    session.sessionToken = sessionToken;
    session.userId = user._id;
    //session.userName= user.userName
    session.save()
};
