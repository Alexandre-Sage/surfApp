"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const errorClass_1 = __importDefault(require("../../../modules/errors/errorClass"));
function arrayAssertion(array) {
    let validationCount = 0;
    for (const item of array) {
        const { isEmpty, isLength } = validator_1.default;
        if (isEmpty(item))
            break;
        else
            validationCount++;
    }
}
;
function objectAssertion(object) {
    const { isEmpty, isLength } = validator_1.default;
    const requestBody = Object.entries(object);
    let validationCount = 0;
    for (const item of requestBody) {
        const [key, value] = item;
        console.log({ [key]: value });
        if (value === null)
            break;
        if (value instanceof Array) {
            console.log("arr");
            let empty = false;
            //arrayAssertion(value)
            value.forEach((subValue) => __awaiter(this, void 0, void 0, function* () {
                console.log(subValue);
                isEmpty(`${subValue}`) ? empty = true : validationCount++;
            }));
            if (empty)
                break;
            //else validationCount++;
        }
        if (isEmpty(value) && !isLength(value, { min: 1 }))
            break;
        else
            validationCount++;
    }
    ;
    return validationCount;
}
function notEmptyCheck(object) {
    return __awaiter(this, void 0, void 0, function* () {
        const { isEmpty, isLength } = validator_1.default;
        const requestBody = Object.entries(object);
        //let validationCount = 0;
        let validationCount = objectAssertion(object);
        //console.log(validationCount)
        return new Promise((resolve, reject) => (validationCount === requestBody.length ? resolve(true) : reject(new errorClass_1.default(`The ${requestBody[validationCount][0]}'s field is empty`, 400))));
    });
}
exports.default = notEmptyCheck;
;
//for (const item of requestBody) {
//    const [key, value] = item;
//    if (value === null) break;
//    if (value instanceof Array) {
//        let empty: boolean = false;
//        value.forEach(async subValue => {
//            isEmpty(subValue) ? empty = true : undefined;
//        })
//        if (empty) break;
//    }
//    if (isEmpty(value) && !isLength(value, { min: 1 })) break;
//    else validationCount++;
//};
