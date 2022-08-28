import { AccountOutput } from "@/shared/types/Account";
import { CardInput, CardOutput } from "@/shared/types/Card";
import * as accountRepository from "../../database/repositories/AccountRepository";

export const createCard = async (accountId: string, payload: CardInput): Promise<CardOutput> => {
    let { id, type, number, cvv, createdAt, updatedAt } = await accountRepository.createCard(
        accountId,
        payload
    );

    number = number.slice(number.length - 4, number.length);

    const card: CardOutput = { id, type, number, cvv, createdAt, updatedAt };

    return await card;
};

export const getAccountWithCards = async (accountId: string): Promise<AccountOutput> => {
    let account = await accountRepository.getAccountWithCards(accountId);

    account.cards?.map((v) => {
        v.number = v.number.slice(v.number.length - 4, v.number.length);
    });

    return account;
};
