"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class CustomError extends Error {
    constructor(message, httpStatus) {
        super(message);
        this.httpStatus = httpStatus;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = CustomError;
