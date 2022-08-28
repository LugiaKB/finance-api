import { InsufficientFundsError, ResourceNotFoundError } from "@/shared/errors";
import { TransactOutput } from "@/shared/types/Transact";
import { Account, Transact } from "../../models";

const createTransactById = async (accountId: string, payload: any): Promise<TransactOutput> => {
    const account = await Account.findByPk(accountId);

    if (!account) throw new ResourceNotFoundError();

    const value: number = parseFloat(String(account.balance)) + parseFloat(String(payload.value));
    if (value < 0) throw new InsufficientFundsError();

    const transact = await Transact.create({
        accountId: accountId,
        ...payload,
    });

    account.update({
        balance: value,
    });

    return transact;
};

export default createTransactById;
