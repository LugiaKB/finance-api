import { PeopleOutput } from "@/shared/types/People";
import { People } from "../../models";

const createPerson = async (payload: any): Promise<PeopleOutput> => {
    return await People.create(payload);
};

export default createPerson;
