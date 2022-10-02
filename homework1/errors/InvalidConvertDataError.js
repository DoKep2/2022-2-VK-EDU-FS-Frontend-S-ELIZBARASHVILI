export default class InvalidConvertDataError extends Error{
    constructor(message) {
        super(message);
        this.name = "Invalid convert data";
    }
}