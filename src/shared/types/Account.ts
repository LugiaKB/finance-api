export interface AccountInput {
    branch: string;
    account: string;
}

export interface AccountOutput {
    id: string;
    branch: string;
    account: string;
    createdAt: Date;
    updatedAt: Date;
}
