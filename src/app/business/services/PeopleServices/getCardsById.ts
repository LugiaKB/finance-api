import { CardDTO } from "@/app/api/dtos/CardDTO";
import { repositoryGetCardsById } from "@/app/database/repositories/AccountRepository";
import { repositoryGetAccountsById } from "@/app/database/repositories/PeopleRepository";
import { query } from "@/shared/types/query";
import { limitCardDigits } from "@/shared/utils/limitCardDigits";

const getCardsById = async (peopleId: string, pagination: query): Promise<CardDTO> => {
    let accounts = await repositoryGetAccountsById(peopleId);

    let cards: any = [];

    for (let account of accounts) {
        let creditCards = await repositoryGetCardsById(account.id, pagination);

        creditCards.map(limitCardDigits);

        cards.push(...creditCards);
    }

    return await { cards: cards, pagination: pagination };
};

export default getCardsById;
