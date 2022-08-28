import {
    serviceCreateCardById,
    serviceGetAccountByIdWithCards,
    serviceGetBalanceById,
} from "@/app/business/services/AccountServices";
import { Request, Response } from "express";

export const createCard = async (req: Request, res: Response) => {
    res.send(await serviceCreateCardById(req.params.accountId, req.body));
};

export const getAccountWithCards = async (req: Request, res: Response) => {
    res.send(await serviceGetAccountByIdWithCards(req.params.accountId));
};

export const getBalance = async (req: Request, res: Response) => {
    res.send(await serviceGetBalanceById(req.params.accountId));
};
