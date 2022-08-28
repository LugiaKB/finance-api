import {
    serviceCreateCardById,
    serviceCreateTransactById,
    serviceGetAccountByIdWithCards,
    serviceGetBalanceById,
    serviceGetTransactsById,
    serviceRevertTransactsById,
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

export const createTransact = async (req: Request, res: Response) => {
    res.send(await serviceCreateTransactById(req.params.accountId, req.body));
};

export const getTransacts = async (req: Request, res: Response) => {
    res.send(await serviceGetTransactsById(req.params.accountId, req.query));
};

export const revertTransact = async (req: Request, res: Response) => {
    res.send(await serviceRevertTransactsById(req.params.transactionId, req.body.description));
};
