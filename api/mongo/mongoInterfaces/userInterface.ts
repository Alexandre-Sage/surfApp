import { PictureObject } from "./pictureObjectInterface";
import { Types } from "mongoose";
export interface UserInterface {
    _id: Types.ObjectId,
    location: string,
    name: string,
    firstName: string,
    userName: string,
    email: string,
    phone: string,
    password: string,
    salt: string,
    picture: Array<PictureObject>
    creationDate: Date,
    lastConnection: Date,
    hashPassword: (password: string) => Promise<string>,
    checkPassword: (password: string) => Promise<string>
}
