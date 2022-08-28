import BaseError from "./BaseError";

class PhysicalCardError extends BaseError {
    constructor() {
        super(
            406,
            "PhysicalCardError",
            "Physical Card Error",
            "An account must have only one physical card."
        );
    }
}

export default PhysicalCardError;
