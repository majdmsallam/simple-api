"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const custome_error_1 = require("./custome-error");
class NotFoundError extends custome_error_1.CustomError {
    constructor() {
        super('not found!');
        this.statusCode = 404;
    }
    generateErrors() {
        return [{ message: 'not found!' }];
    }
}
exports.NotFoundError = NotFoundError;
