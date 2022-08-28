import { ResourceNotFoundError } from "@/shared/errors";
import { AccountOutput } from "@/shared/types/Account";
import { People } from "../../models";

const getAccountsById = async (id: string): Promise<AccountOutput[]> => {
    const person = await People.findByPk(id);
    if (!person) throw new ResourceNotFoundError();

    const accounts = await person.getAccounts();
    if (!accounts) throw new ResourceNotFoundError();

    return accounts;
};

export default getAccountsById;
