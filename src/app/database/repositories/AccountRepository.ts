import { AccountOutputDTO } from "@/app/api/dtos/AccountDTO";
import { PhysicalCardError, ResourceNotFoundError } from "@/shared/errors";
import { AccountOutput } from "@/shared/types/Account";
import { CardOutput } from "@/shared/types/Card";
import { Account, Card } from "../models";

export const createCard = async (id: string, payload: any): Promise<CardOutput> => {
    const account = await Account.findByPk(id);

    if (!account) throw new ResourceNotFoundError();

    const cards = await account.getCards({
        where: { type: "physical" },
    });

    if (cards.length == 1 && payload.type == "physical") throw new PhysicalCardError();

    return await account.createCard(payload);
};

export const getAccountWithCards = async (id: string): Promise<AccountOutputDTO> => {
    let account = await Account.findByPk(id, {
        include: [
            {
                model: Card,
                attributes: ["id", "type", "number", "cvv", "createdAt", "updatedAt"],
            },
        ],
        attributes: ["id", "branch", "account", "createdAt", "updatedAt"],
    });

    if (!account) throw new ResourceNotFoundError();

    return account;
};
