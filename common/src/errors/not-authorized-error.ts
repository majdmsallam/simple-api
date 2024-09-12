import { CustomError } from "./custome-error";

export class NotAuthorizedError extends CustomError {
    statusCode = 401;
    constructor() {
        super('not authorized')
    }
    generateErrors() {
        return [{ message: 'not authorized' }]
    }
}