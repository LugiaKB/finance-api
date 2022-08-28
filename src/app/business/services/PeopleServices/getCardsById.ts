import { CardDTO } from "@/app/api/dtos/CardDTO";
import { repositoryGetCardsById } from "@/app/database/repositories/AccountRepository";
import { repositoryGetAccountsById } from "@/app/database/repositories/PeopleRepository";
import { query } from "@/shared/types/query";
import { limitCardDigits } from "@/shared/utils/limitCardDigits";

const getCardsById = async (peopleId: string, pagination: query): Promise<CardDTO> => {
    const accounts = await repositoryGetAccountsById(peopleId, ["id"]);
    let accountIds: string[] = [];

    accounts.map((account) => {
        accountIds.push(account.id);
    });

    const cards = await repositoryGetCardsById(accountIds, pagination);

    return await { cards: cards, pagination: pagination };
};

export default getCardsById;
