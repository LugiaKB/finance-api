import BaseError from "./BaseError";

class InvalidRouteError extends BaseError {
  constructor(route: string, method: string) {
    super(
      404,
      "InvalidRouteError",
      "Invalid route requested",
      `Method ${method} for route ${route} is invalid. Insert a valid route.`,
    );
  }
}

export default InvalidRouteError;
