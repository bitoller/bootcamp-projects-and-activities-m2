export default class AppError {
    readonly message: string;
    readonly statusCode: number;
    constructor(message: string, statusCode?: number);
}
