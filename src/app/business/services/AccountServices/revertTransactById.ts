import { repositoryReverTransactById } from "@/app/database/repositories/AccountRepository";
import { TransactOutput } from "@/shared/types/Transact";

const revertTransactById = async (
    transactId: string,
    revertDescription?: string
): Promise<TransactOutput> => {
    const { id, value, description, createdAt, updatedAt } = await repositoryReverTransactById(
        transactId,
        revertDescription
    );

    return { id, value, description, createdAt, updatedAt };
};

export default revertTransactById;
