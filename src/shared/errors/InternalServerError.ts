import BaseError from "./BaseError";

class InternalServerError extends BaseError {
  constructor(name: string, description: string) {
    super(
      500,
      name,
      "Internal Server Error",
      description,
    );
  }
}

export default InternalServerError;
