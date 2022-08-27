export interface CardInput {
  type: string;
  number: string;
  cvv: string;
}

export interface CardOutput {
  id: string;
  type: string;
  number: string;
  cvv: string;
  createdAt: Date;
  updatedAt: Date;
}
