import { ResourceNotFoundError } from "@/shared/errors";
import { AccountOutput } from "@/shared/types/Account";
import { PeopleOutput } from "@/shared/types/People";
import { People } from "../models";

export const create = async (payload: any): Promise<PeopleOutput> => {
    return await People.create(payload);
};

export const createAccount = async (id: string, payload: any): Promise<AccountOutput> => {
    const person = await People.findByPk(id);

    if (!person) throw new ResourceNotFoundError();

    return await person.createAccount(payload);
};

export const getAccounts = async (id: string): Promise<AccountOutput[]> => {
    const person = await People.findByPk(id);
    if (!person) throw new ResourceNotFoundError();

    const accounts = await person.getAccounts();
    if (!accounts) throw new ResourceNotFoundError();

    return accounts;
};
