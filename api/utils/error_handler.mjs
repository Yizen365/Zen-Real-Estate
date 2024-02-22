export const errorHandler = (statusCode, errMessage)=> {
    const err = new Error();
    err.statusCode = statusCode;
    err.message = errMessage;
    return err;
}