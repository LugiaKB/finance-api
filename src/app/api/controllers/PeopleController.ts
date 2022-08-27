import { Request, Response } from "express";
import * as peopleService from "../../business/services/PeopleService";

export const create = async (req: Request, res: Response) => {
    res.send(await peopleService.create(req.body));
};
