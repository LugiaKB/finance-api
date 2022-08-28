import { ResourceNotFoundError } from "@/shared/errors";
import { AccountOutput } from "@/shared/types/Account";
import { People } from "../../models";

const createAccountById = async (id: string, payload: any): Promise<AccountOutput> => {
    const person = await People.findByPk(id);

    if (!person) throw new ResourceNotFoundError();

    return await person.createAccount(payload);
};

export default createAccountById;
