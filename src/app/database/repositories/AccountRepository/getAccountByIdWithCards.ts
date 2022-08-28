import { AccountOutputDTO } from "@/app/api/dtos/AccountDTO";
import { ResourceNotFoundError } from "@/shared/errors";
import { Account, Card } from "../../models";

const getAccountByIdWithCards = async (id: string): Promise<AccountOutputDTO> => {
    let account = await Account.findByPk(id, {
        include: [
            {
                model: Card,
                attributes: ["id", "type", "number", "cvv", "createdAt", "updatedAt"],
            },
        ],
        attributes: ["id", "branch", "account", "createdAt", "updatedAt"],
    });

    if (!account) throw new ResourceNotFoundError();

    return account;
};

export default getAccountByIdWithCards;
