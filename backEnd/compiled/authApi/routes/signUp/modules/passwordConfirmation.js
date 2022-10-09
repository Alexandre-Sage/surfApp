import { CustomError } from "../../../../sharedModules/errors/errorClass.js";
export default function passwordConfirmation(password, passwordConfirmation) {
    const error = new CustomError("Password confirmation doesnt match", "PASSWORD CONFIRMATION ERROR", 400);
    return new Promise((resolve, reject) => {
        password === passwordConfirmation ? resolve(true) : reject(error);
    });
}
;
