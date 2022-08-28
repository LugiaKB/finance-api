import { NextFunction, Request, Response } from "express";
import { isCelebrateError } from "celebrate";

import { BaseError, InternalServerError, ValidationError } from "@/shared/errors";

export const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof BaseError) {
        return res.status(err.code).json(err.toObject());
    }

    if (isCelebrateError(err)) {
        let message = "";

        for (const [, joiError] of err.details.entries()) {
            message = joiError.message;
        }

        const celebrateError = new ValidationError(err.message, message);
        return res.status(400).json(celebrateError.toObject());
    }

    console.log(err);
    const internalError = new InternalServerError(err.name, err.message);
    return res.status(500).json(internalError.toObject());
};
