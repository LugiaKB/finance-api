import { TransactDTO } from "@/app/api/dtos/TransactDTO";
import { repositoryGetTransactsById } from "@/app/database/repositories/AccountRepository";
import { query } from "@/shared/types/query";

const getTransactsById = async (accountId: string, pagination: query): Promise<TransactDTO> => {
    const transacts = await repositoryGetTransactsById(accountId, pagination);

    return {
        transactions: transacts,
        pagination: pagination,
    };
};

export default getTransactsById;
