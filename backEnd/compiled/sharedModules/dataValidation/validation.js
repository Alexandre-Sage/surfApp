import validator from "validator";
import { CustomError } from "../errors/errorClass.js";
export default function dataValidation(body) {
    const requestBody = Object.entries(body);
    let validationCount = 0;
    for (const item of requestBody) {
        const [key, value] = item;
        const { isLength, isEmail, isMobilePhone } = validator;
        if (key === "email" && !isEmail(value))
            break;
        if (key === "password" && !isLength(value, { min: 4 }))
            break;
        if (key === "phone" && !isMobilePhone(value))
            break;
        else
            validationCount++;
    }
    ;
    return new Promise((resolve, reject) => (validationCount === requestBody.length ? resolve(true) : reject(new CustomError(`The provided ${requestBody[validationCount][0]} is incorrect`, "DATA VALIDATION ERROR", 400))));
}
;
/*switch (key) {
            case "email":
                console.log("email")
                if (!isEmail(value)) break;
                else validationCount++;
                break;
            case "password":
                console.log("password")
                if (!isLength(value, { min: 4 })) break;
                else validationCount++;
            default:
                validationCount++;
                break;
        };
*/ 
