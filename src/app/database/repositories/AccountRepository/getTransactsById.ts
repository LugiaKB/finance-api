import { ResourceNotFoundError } from "@/shared/errors";
import { query } from "@/shared/types/query";
import { TransactOutput } from "@/shared/types/Transact";
import { getPagination } from "@/shared/utils/getPagination";
import { Account, Transact } from "../../models";

const getTransactsById = async (
    accountId: string,
    pagination: query
): Promise<TransactOutput[]> => {
    const account = await Account.findByPk(accountId);
    if (!account) throw new ResourceNotFoundError();

    const transacts = await Transact.findAll({
        where: {
            accountId: accountId,
        },
        ...getPagination(pagination, ["id", "value", "description", "createdAt", "updatedAt"]),
    });
    if (!transacts) throw new ResourceNotFoundError();

    return transacts;
};

export default getTransactsById;
