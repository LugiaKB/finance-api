import { AccountOutput } from "@/shared/types/Account";
import { CardInput, CardOutput } from "@/shared/types/Card";
import { limitCardDigits } from "@/shared/utils/limitCardDigits";
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

    account.cards?.map(limitCardDigits);

    return account;
};

export const getBalance = async (accountId: string): Promise<{ balance: string }> => {
    const value = await accountRepository.getBalance(accountId);

    let balance = parseFloat(String(value.balance)).toFixed(2);

    return { balance: balance };
};
