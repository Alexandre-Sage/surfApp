import validator from "validator";
import { CustomError } from "../errors/errorClass";
function arrayAssertion(array) {
    let validationCount = 0;
    for (const item of array) {
        const { isEmpty, isLength } = validator;
        if (isEmpty(item))
            break;
        else
            validationCount++;
    }
}
;
function objectAssertion(object) {
    const { isEmpty, isLength } = validator;
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
            value.forEach(async (subValue) => {
                console.log(subValue);
                isEmpty(`${subValue}`) ? empty = true : validationCount++;
            });
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
export default async function notEmptyCheck(object) {
    const { isEmpty, isLength } = validator;
    const requestBody = Object.entries(object);
    //let validationCount = 0;
    let validationCount = objectAssertion(object);
    //console.log(validationCount)
    return new Promise((resolve, reject) => (validationCount === requestBody.length ? resolve(true) : reject(new CustomError(`The ${requestBody[validationCount][0]}'s field is empty`, "NOT EMPTY ERROR", 400))));
}
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
