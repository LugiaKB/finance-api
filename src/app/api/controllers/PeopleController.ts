import { Request, Response } from "express";
import * as peopleService from "../../business/services/PeopleService";

export const create = async (req: Request, res: Response) => {
    res.send(await peopleService.create(req.body));
};

export const createAccount = async (req: Request, res: Response) => {
    res.send(await peopleService.createAccount(req.params.peopleId, req.body));
};

export const getAccounts = async (req: Request, res: Response) => {
    res.send(await peopleService.getAccounts(req.params.peopleId));
};

export const getCards = async (req: Request, res: Response) => {
    res.send(await peopleService.getCards(req.params.peopleId));
};
