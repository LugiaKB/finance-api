import { CardOutput } from "@/shared/types/Card";
import { query } from "@/shared/types/query";

export interface CardDTO {
    cards: CardOutput[];
    pagination: query;
}
