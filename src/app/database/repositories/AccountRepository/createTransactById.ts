import { ResourceNotFoundError } from "@/shared/errors";
import { TransactOutput } from "@/shared/types/Transact";
import { Account } from "../../models";

const createTransactById = async (accountId: string, payload: any): Promise<TransactOutput> => {
    const account = await Account.findByPk(accountId);

    if (!account) throw new ResourceNotFoundError();

    const { id, value, description, createdAt, updatedAt } = await account.createTransact(payload);

    return { id, value, description, createdAt, updatedAt };
};

export default createTransactById;
