"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const errorClass_1 = __importDefault(require("../../../modules/errors/errorClass"));
function dataValidation(body) {
    const requestBody = Object.entries(body);
    let validationCount = 0;
    for (const item of requestBody) {
        const [key, value] = item;
        const { isLength, isEmail, isMobilePhone } = validator_1.default;
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
    return new Promise((resolve, reject) => (validationCount === requestBody.length ? resolve(true) : reject(new errorClass_1.default(`The provided ${requestBody[validationCount][0]} is incorrect`, 400))));
}
exports.default = dataValidation;
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
