import { InsufficientFundsError, ResourceNotFoundError } from "@/shared/errors";
import { TransactOutput } from "@/shared/types/Transact";
import { Account, Transact } from "../../models";

const revertTransactById = async (
    transactId: string,
    description?: string
): Promise<TransactOutput> => {
    const transact = await Transact.findByPk(transactId);
    if (!transact) throw new ResourceNotFoundError();

    const account = await Account.findByPk(transact.accountId);
    if (!account) throw new ResourceNotFoundError();

    const value: number = parseFloat(String(account.balance)) - parseFloat(String(transact.value));
    if (value < 0) throw new InsufficientFundsError();

    const desc = description ? description : `Cancelamento de "${transact.description}"`;

    const newTransact = await Transact.create({
        value: Math.abs(transact.value),
        description: desc,
        accountId: account.id,
    });

    account.update({
        balance: value,
    });

    return newTransact;
};

export default revertTransactById;
