export interface PeopleInput {
  name: string;
  document: string;
  password: string;
}

export interface PeopleOutput {
  id: string;
  name: string;
  document: string;
  createdAt: Date;
  updatedAt: Date;
}
