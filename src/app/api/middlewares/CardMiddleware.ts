import { concatenate } from "@/shared/utils/concatenate";
import { NextFunction, Request, Response } from "express";

export const CardMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.number) {
        let card = req.body.number as string;

        let [numbers, ...rest] = card.split(" ");

        req.body.number = concatenate(numbers, rest);
    }
    next();
};
