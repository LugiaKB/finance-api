import { CardOutput } from "@/shared/types/Card";
import { Card } from "../models";

export const getAllById = async (id: string): Promise<CardOutput[]> => {
    return await Card.findAll({
        where: { accountId: id },
        attributes: ["id", "type", "number", "cvv", "createdAt", "updatedAt"],
    });
};
