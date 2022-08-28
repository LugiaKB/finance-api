import { repositoryCreateTransactById } from "@/app/database/repositories/AccountRepository";
import { TransactInput, TransactOutput } from "@/shared/types/Transact";

const createTransactById = async (
    accountId: string,
    payload: TransactInput
): Promise<TransactOutput> => {
    const { id, value, description, createdAt, updatedAt } = await repositoryCreateTransactById(
        accountId,
        payload
    );

    return { id, value, description, createdAt, updatedAt };
};

export default createTransactById;
