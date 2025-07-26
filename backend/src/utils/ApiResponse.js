class ApiRespose{
    constructor(
        statucsCode,
        data,
        message="Request was successful",
    ){
        this.statusCode = statucsCode;
        this.data = data;
        this.message = message;
        this.success = statucsCode<400;
    }
}
export { ApiRespose }