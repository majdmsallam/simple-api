"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthorizedError = void 0;
const custome_error_1 = require("./custome-error");
class NotAuthorizedError extends custome_error_1.CustomError {
    constructor() {
        super('not authorized');
        this.statusCode = 401;
    }
    generateErrors() {
        return [{ message: 'not authorized' }];
    }
}
exports.NotAuthorizedError = NotAuthorizedError;
