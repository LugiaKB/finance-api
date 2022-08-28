import { repositoryGetAccountsById } from "@/app/database/repositories/PeopleRepository";
import { AccountOutput } from "@/shared/types/Account";

const getAccountsById = async (peopleId: string): Promise<AccountOutput[]> => {
    let originalAccounts = await repositoryGetAccountsById(peopleId);
    let accounts: AccountOutput[] = [];

    originalAccounts.map((a) => {
        const { id, branch, account, createdAt, updatedAt } = a;
        accounts.push({ id, branch, account, createdAt, updatedAt });
    });

    return await accounts;
};

export default getAccountsById;
