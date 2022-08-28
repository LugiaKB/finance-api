export interface TransactInput {
    value: number;
    description: string;
}

export interface TransactOutput {
    id: string;
    value: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
