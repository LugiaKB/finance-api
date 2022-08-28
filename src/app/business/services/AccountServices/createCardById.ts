import { CardInput, CardOutput } from "@/shared/types/Card";
import { repositoryCreateCardById } from "@/app/database/repositories/AccountRepository";

const createCardById = async (accountId: string, payload: CardInput): Promise<CardOutput> => {
    let { id, type, number, cvv, createdAt, updatedAt } = await repositoryCreateCardById(
        accountId,
        payload
    );

    number = number.slice(number.length - 4, number.length);

    const card: CardOutput = { id, type, number, cvv, createdAt, updatedAt };

    return await card;
};

export default createCardById;
