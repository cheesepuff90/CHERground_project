export enum ErrorType {
    TYPE_USER = 0x01 << 8,
    TYPE_PRODUCT = 0x01 << 8,
    TYPE_SYSTEM = 0xff << 8
}
export class CustomError extends Error {
    status: number;
    code: number;

    constructor (status: number, code: number, message: string) {
        super();
        this.status = status;
        this.code = code;
        this.message = message;
    }
}

export class UserError {
    static UNEXISTING_USER = new CustomError(404, ErrorType.TYPE_USER, "User Doesn't Exist")
}

export class ProductError {
    static UNEXISTING_PRODUCT = new CustomError(404, ErrorType.TYPE_PRODUCT, "Product Doesn't Exist")
}