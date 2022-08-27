import BaseError from "./BaseError";

class ResourceNotFoundError extends BaseError {
    constructor() {
        super(
            404,
            "ResourceNotFoundError",
            "Resource Not Found",
            "The requested resource was not found or does not exist."
        );
    }
}

export default ResourceNotFoundError;
