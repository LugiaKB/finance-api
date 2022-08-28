import {
    serviceCreateAccountById,
    serviceCreatePerson,
    serviceGetAccountsById,
    serviceGetCardsById,
} from "@/app/business/services/PeopleServices";
import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
    res.send(await serviceCreatePerson(req.body));
};

export const createAccount = async (req: Request, res: Response) => {
    res.send(await serviceCreateAccountById(req.params.peopleId, req.body));
};

export const getAccounts = async (req: Request, res: Response) => {
    res.send(await serviceGetAccountsById(req.params.peopleId));
};

export const getCards = async (req: Request, res: Response) => {
    res.send(await serviceGetCardsById(req.params.peopleId, req.query));
};
