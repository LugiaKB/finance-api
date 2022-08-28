import { CardOutput } from "@/shared/types/Card";
import { query } from "@/shared/types/query";
import { Card } from "../../models";

const getCardsById = async (id: string, pagination: query): Promise<CardOutput[]> => {
    const { itemsPerPage, currentPage } = pagination;

    const limit = itemsPerPage ? itemsPerPage : undefined;
    const offset = itemsPerPage && currentPage ? itemsPerPage * (currentPage - 1) : undefined;

    return await Card.findAll({
        where: { accountId: id },
        attributes: ["id", "type", "number", "cvv", "createdAt", "updatedAt"],
        limit: limit,
        offset: offset,
    });
};

export default getCardsById;
