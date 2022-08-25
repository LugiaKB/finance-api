import BaseError from "./BaseError";

class ValidationError extends BaseError {
  constructor(title: string, description: string) {
    super(400, "ValidationError", title, description);
  }
}

export default ValidationError;
