import { Card } from "@/app/database/models";
import { AccountOutput } from "@/shared/types/Account";

export interface AccountOutputDTO extends AccountOutput {
    cards?: Card[];
}
