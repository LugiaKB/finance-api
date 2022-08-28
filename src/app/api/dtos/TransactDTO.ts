import { query } from "@/shared/types/query";
import { TransactOutput } from "@/shared/types/Transact";

export interface TransactDTO {
    transactions: TransactOutput[];
    pagination: query;
}
