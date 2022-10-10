;
export class CustomError extends Error {
    devMessage;
    httpStatus;
    constructor(message, devMessage, httpStatus) {
        super(message);
        this.devMessage = devMessage;
        this.httpStatus = httpStatus;
        this.httpStatus = httpStatus;
        this.message = process.env.NODE_ENV === "developpment" ? devMessage : message;
        Error.captureStackTrace(this, this.constructor);
    }
}
