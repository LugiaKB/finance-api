import { PeopleInput, PeopleOutput } from "@/shared/types/People";
import * as peopleRepository from "../../database/repositories/PeopleRepository";

export const create = async (payload: PeopleInput): Promise<PeopleOutput> => {
    return await peopleRepository.create(payload);
};
