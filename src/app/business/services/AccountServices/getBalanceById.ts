import { repositoryGetBalanceById } from "@/app/database/repositories/AccountRepository";

const getBalanceById = async (accountId: string): Promise<{ balance: string }> => {
    const value = await repositoryGetBalanceById(accountId);

    let balance = parseFloat(String(value.balance)).toFixed(2);

    return { balance: balance };
};

export default getBalanceById;
