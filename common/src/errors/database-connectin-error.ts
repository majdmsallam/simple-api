import { CustomError } from "./custome-error";

export class DatabaseConnectionError extends CustomError{
    statusCode = 500;
    constructor(){
        super('db connection error!')
    }
    generateErrors(){
        return [{message: 'db connection error!'}]
        
    }
}