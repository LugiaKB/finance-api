import { AccountInput, AccountOutput } from "@/shared/types/Account";
import { CardOutput } from "@/shared/types/Card";
import { PeopleInput, PeopleOutput } from "@/shared/types/People";
import * as peopleRepository from "../../database/repositories/PeopleRepository";
import * as cardRepository from "../../database/repositories/CardRepository";
import { limitCardDigits } from "@/shared/utils/limitCardDigits";

export const create = async (payload: PeopleInput): Promise<PeopleOutput> => {
    const { id, name, document, createdAt, updatedAt } = await peopleRepository.create(payload);

    const person: PeopleOutput = { id, name, document, createdAt, updatedAt };

    return await person;
};

export const createAccount = async (
    peopleId: string,
    payload: AccountInput
): Promise<AccountOutput> => {
    const { id, branch, account, createdAt, updatedAt } = await peopleRepository.createAccount(
        peopleId,
        payload
    );

    const Account: AccountOutput = { id, branch, account, createdAt, updatedAt };

    return await Account;
};

export const getAccounts = async (peopleId: string): Promise<AccountOutput[]> => {
    let originalAccounts = await peopleRepository.getAccounts(peopleId);
    let accounts: AccountOutput[] = [];

    originalAccounts.map((a) => {
        const { id, branch, account, createdAt, updatedAt } = a;
        accounts.push({ id, branch, account, createdAt, updatedAt });
    });

    return await accounts;
};

export const getCards = async (peopleId: string): Promise<{ cards: CardOutput[] }> => {
    let accounts = await peopleRepository.getAccounts(peopleId);

    let cards: any = [];

    for (let account of accounts) {
        let creditCards = await cardRepository.getAllById(account.id);

        creditCards.map(limitCardDigits);

        cards.push(...creditCards);
    }

    return await { cards: cards };
};
