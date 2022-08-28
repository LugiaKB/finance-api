import { PhysicalCardError, ResourceNotFoundError } from "@/shared/errors";
import { CardOutput } from "@/shared/types/Card";
import { Account } from "../../models";

const createCardById = async (id: string, payload: any): Promise<CardOutput> => {
    const account = await Account.findByPk(id);

    if (!account) throw new ResourceNotFoundError();

    const cards = await account.getCards({
        where: { type: "physical" },
    });

    if (cards.length == 1 && payload.type == "physical") throw new PhysicalCardError();

    return await account.createCard(payload);
};

export default createCardById;
