import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
  res.send(req.body);
};