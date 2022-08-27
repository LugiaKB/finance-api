import { concatenate } from "@/shared/utils/concatenate";
import { NextFunction, Request, Response } from "express";

export const PeopleMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const document = req.body.document as string;

    const [doc, ...numbers] = document.split(/[-./]+/);

    req.body.document = concatenate(doc, numbers);

    next();
};
