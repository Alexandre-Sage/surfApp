import { Schema, model, Model } from "mongoose";
import InstanceMethods from "mongoose"
import { UserInterface } from "../mongoInterfaces/userInterface";
import { randomBytes, pbkdf2Sync } from "crypto";
import CustomError from "../../modules/errors/errorClass";
const UserSchema = new Schema<UserInterface>({
    location: { type: String, required: true },
    name: { type: String, required: true },
    firstName: { type: String, required: true },
    userName: { type: String, required: true, unique: true, index: true, dropDups: false },
    email: { type: String, required: true, unique: true, index: true, dropDups: false },
    phone: { type: String, required: true, unique: true, index: true, dropDups: false },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    picture: [
        {
            path: { type: String, required: false },
            place: { type: String, required: false },
            uploadDate: { type: Date, required: false }
        }
    ],
    creationDate: { type: Date, default: Date.now, required: true },
    lastConnection: { type: Date, default: Date.now, required: true },
});
UserSchema.methods.hashPassword = async function (password: string) {
    this.salt = await randomBytes(25).toString("hex");
    this.password = await pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex");
};
UserSchema.methods.checkPassword = function (password: string): Promise<any> {
    const hashedPassword = pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex");
    //return this.password === hashedPassword;
    return new Promise((resolve: Function, reject: Function) => (
        this.password === hashedPassword ? resolve(true) : reject(new CustomError("Invalid password", 400))
    ))
};
const User = model<UserInterface>("User", UserSchema);

User.createIndexes();
export default User;

/*return new Promise((resolve: Function, reject: Function) => (
    this.password === hashedPassword ? resolve(true) : reject(new CustomError("Invalid password", 400))
))*/