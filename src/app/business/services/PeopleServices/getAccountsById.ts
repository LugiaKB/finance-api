import { repositoryGetAccountsById } from "@/app/database/repositories/PeopleRepository";
import { AccountOutput } from "@/shared/types/Account";

const getAccountsById = async (peopleId: string): Promise<AccountOutput[]> => {
    let accounts = await repositoryGetAccountsById(peopleId);

    return await accounts;
};

export default getAccountsById;
