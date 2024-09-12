"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
const custome_error_1 = require("./custome-error");
class DatabaseConnectionError extends custome_error_1.CustomError {
    constructor() {
        super('db connection error!');
        this.statusCode = 500;
    }
    generateErrors() {
        return [{ message: 'db connection error!' }];
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
