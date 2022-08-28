import BaseError from "./BaseError";

class InsufficientFundsError extends BaseError {
    constructor() {
        super(
            406,
            "InsufficientFundsError",
            "InsufficientFundsError",
            "The account does not have enough funds for this operation"
        );
    }
}

export default InsufficientFundsError;
