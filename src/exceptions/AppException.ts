export default class AppException{
    readonly message: string;
    readonly status: number;

    constructor(message: string, status: number){
        this.message = message;
        this.status = status;
    }
}