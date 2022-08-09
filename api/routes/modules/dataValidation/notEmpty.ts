import validator from "validator";
import CustomError from "../../../modules/errors/errorClass";
export default function notEmptyCheck(object: object): Promise<boolean | Error> {
    const { isEmpty, isLength } = validator;
    const requestBody = Object.entries(object);
    let validationCount = 0;
    for (const item of requestBody) {
        const [key, value] = item;
        if (value === null) break;
        if (isEmpty(value) && !isLength(value, { min: 1 })) break;
        else validationCount++;
    };
    return new Promise((resolve: Function, reject: Function): Boolean | Error => (
        validationCount === requestBody.length ? resolve(true) : reject(
            new CustomError(`The ${requestBody[validationCount][0]}'s field is empty`, 400)
        )
    ));
};
