import { repositoryCreatePerson } from "@/app/database/repositories/PeopleRepository";
import { PeopleInput, PeopleOutput } from "@/shared/types/People";

const createPerson = async (payload: PeopleInput): Promise<PeopleOutput> => {
    const { id, name, document, createdAt, updatedAt } = await repositoryCreatePerson(payload);

    const person: PeopleOutput = { id, name, document, createdAt, updatedAt };

    return await person;
};

export default createPerson;
