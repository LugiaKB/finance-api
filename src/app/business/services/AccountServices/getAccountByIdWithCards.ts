import { repositoryGetAccountByIdWithCards } from "@/app/database/repositories/AccountRepository";
import { AccountOutput } from "@/shared/types/Account";
import { limitCardDigits } from "@/shared/utils/limitCardDigits";

const getAccountByIdWithCards = async (accountId: string): Promise<AccountOutput> => {
    let account = await repositoryGetAccountByIdWithCards(accountId);

    account.cards?.map(limitCardDigits);

    return account;
};

export default getAccountByIdWithCards;
