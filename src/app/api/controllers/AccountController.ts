import { Request, Response } from "express";
import * as accountService from "../../business/services/AccountService";

export const createCard = async (req: Request, res: Response) => {
    res.send(await accountService.createCard(req.params.accountId, req.body));
};

export const getAccountWithCards = async (req: Request, res: Response) => {
    res.send(await accountService.getAccountWithCards(req.params.accountId));
};
