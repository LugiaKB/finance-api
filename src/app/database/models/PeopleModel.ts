import {
    AllowNull,
    Column,
    CreatedAt,
    DataType,
    Default,
    DeletedAt,
    HasMany,
    Length,
    Model,
    PrimaryKey,
    Table,
    Unique,
    UpdatedAt,
} from "sequelize-typescript";
import { HasManyCreateAssociationMixin, HasManyGetAssociationsMixin } from "sequelize/types";
import Account from "./AccountModel";
import Card from "./CardModel";

@Table({
    tableName: "people",
})
class People extends Model {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column({ type: DataType.UUID })
    id!: string;

    @Unique
    @AllowNull(false)
    @Column
    name!: string;

    @Length({
        min: 11,
        max: 14,
    })
    @Unique
    @AllowNull(false)
    @Column
    document!: string;

    @Length({ max: 60 })
    @AllowNull(false)
    @Column
    password!: string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @DeletedAt
    deletedAt!: Date;

    @HasMany(() => Account)
    accounts!: Account[];

    public createAccount!: HasManyCreateAssociationMixin<Account, string>;

    public getAccounts!: HasManyGetAssociationsMixin<Account>;
}

export default People;
