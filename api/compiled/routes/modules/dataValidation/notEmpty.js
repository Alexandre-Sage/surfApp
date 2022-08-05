"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const errorClass_1 = __importDefault(require("../../../modules/errors/errorClass"));
function notEmptyCheck(object) {
    const { isEmpty, isLength } = validator_1.default;
    const responseBody = Object.entries(object);
    let validationCount = 0;
    for (const item of responseBody) {
        const [key, value] = item;
        if (isEmpty(value) && !isLength(value, { min: 1 }))
            break;
        else
            validationCount++;
    }
    ;
    return new Promise((resolve, reject) => (validationCount === responseBody.length ? resolve(true) : reject(new errorClass_1.default(`The field ${responseBody[validationCount][0]} is empty`, 400))));
}
exports.default = notEmptyCheck;
;