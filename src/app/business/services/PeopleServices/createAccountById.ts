import { repositoryCreateAccountById } from "@/app/database/repositories/PeopleRepository";
import { AccountInput, AccountOutput } from "@/shared/types/Account";

const createAccountById = async (
    peopleId: string,
    payload: AccountInput
): Promise<AccountOutput> => {
    const { id, branch, account, createdAt, updatedAt } = await repositoryCreateAccountById(
        peopleId,
        payload
    );

    const Account: AccountOutput = { id, branch, account, createdAt, updatedAt };

    return await Account;
};

export default createAccountById;
