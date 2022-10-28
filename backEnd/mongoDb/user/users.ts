import dotenv from "dotenv";
import { Schema, model, connect, disconnect } from "mongoose";
import { UserInterface } from "./userInterface";
import { randomBytes, pbkdf2Sync } from "crypto";
import { CustomError } from "../../sharedModules/errors/errorClass";
dotenv.config()
export const UserSchema = new Schema<UserInterface>({
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
/**
 * First User schema method hashPassword:
 * This function hash the new user password with SHA512 algorithm and add salt it. 
 * @param password the password to hash has to be a string.  
 */

UserSchema.methods.hashPassword = async function (password: string) {
    this.salt = randomBytes(25).toString("hex");
    this.password = pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex");
};

/**
 * Second User schema method checkPassword.
 * Check if the provided string match the databse stored password. 
 * @param password string provided as login password by the user.
 * @returns a promise that resolves with true if the password and the provided string match or 
 * reject it with an error if they don't.  
 */

UserSchema.methods.checkPassword = function (password: string): Promise<any> {
    const hashedPassword = pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex");
    return new Promise((resolve: Function, reject: Function) => (
        this.password === hashedPassword ? resolve(true) : reject(new CustomError(
            "Invalid password",
            "USER SCHEMA PASSWORD VALIDATION ERROR",
            400
        ))
    ));
};
export const User = model<UserInterface>("User", UserSchema);
connect(`${process.env.MONGO_ATLAS}`, {
    autoIndex: true,
}).then(() => User.createIndexes())
    .catch(err => console.log(err))
    //.finally(() => disconnect())
//export {UserSchema};

