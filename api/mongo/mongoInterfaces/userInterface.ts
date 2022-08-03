import { PictureObject } from "./pictureObjectInterface";

export interface UserInterface {
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
