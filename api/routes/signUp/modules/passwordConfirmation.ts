import CustomError from "../../../modules/errors/errorClass";
import { CustomErrorInterface } from "../../../modules/errors/errorClass";

export default function passwordConfirmation(password: string, passwordConfirmation: string) {
    const error = new CustomError("Password confirmation doesnt match", 400)
    return new Promise((resolve: Function, reject: Function) => {
        password === passwordConfirmation ? resolve(true) : reject(error)
    });
};

