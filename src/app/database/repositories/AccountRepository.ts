import { ResourceNotFoundError } from "@/shared/errors";
import { AccountInput, AccountOutput } from "@/shared/types/Account";
import { Account } from "../models";

const getAllById = async (id: string): Promise<AccountOutput[]> => {
    const accounts = await Account.findAll({
        where: {
            person: id,
        },
    });

    if (!accounts) throw new ResourceNotFoundError();

    return accounts;
};
