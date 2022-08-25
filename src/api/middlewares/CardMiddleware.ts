import { NextFunction, Request, Response } from "express";

export const CardMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.number) {
    let card = req.body.number as string;

    let [numbers, ...rest] = card.split(" ");

    for (let num of rest) numbers += num;

    req.body.number = numbers;
  }
  next();
};
