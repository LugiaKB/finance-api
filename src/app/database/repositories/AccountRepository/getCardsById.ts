import { ResourceNotFoundError } from "@/shared/errors";
import { CardOutput } from "@/shared/types/Card";
import { query } from "@/shared/types/query";
import { getPagination } from "@/shared/utils/getPagination";
import { Card } from "../../models";

const getCardsById = async (accountIds: string[], pagination: query): Promise<CardOutput[]> => {
    const cards = await Card.findAll({
        where: {
            accountId: accountIds,
        },
        ...getPagination(pagination, ["id", "type", "number", "cvv", "createdAt", "updatedAt"]),
    });
    if (!cards) throw new ResourceNotFoundError();

    return cards;
};

export default getCardsById;
