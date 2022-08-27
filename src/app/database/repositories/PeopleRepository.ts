import { PeopleOutput } from "@/shared/types/People";
import { People } from "../models";

export const create = async (payload: any): Promise<PeopleOutput> => {
    const { id, name, document, createdAt, updatedAt } = await People.create(payload);

    return {
        id,
        name,
        document,
        createdAt,
        updatedAt,
    };
};
