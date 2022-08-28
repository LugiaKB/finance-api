import { ResourceNotFoundError } from "@/shared/errors";
import { Account } from "../../models";

const getBalanceById = async (id: string): Promise<{ balance: number }> => {
    const account = await Account.findByPk(id);

    if (!account) throw new ResourceNotFoundError();

    return await { balance: account.balance };
};

export default getBalanceById;
