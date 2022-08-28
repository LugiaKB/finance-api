import {
    AllowNull,
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    Default,
    DeletedAt,
    ForeignKey,
    HasMany,
    Length,
    Model,
    PrimaryKey,
    Table,
    Unique,
    UpdatedAt,
} from "sequelize-typescript";
import { HasManyCreateAssociationMixin, HasManyGetAssociationsMixin } from "sequelize/types";
import Card from "./CardModel";
import People from "./PeopleModel";
import Transact from "./TransactModel";

@Table({
    tableName: "account",
})
class Account extends Model {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column({ type: DataType.UUID })
    id!: string;

    @Length({
        min: 3,
        max: 3,
    })
    @AllowNull(false)
    @Column
    branch!: string;

    @Length({
        min: 9,
        max: 9,
    })
    @AllowNull(false)
    @Unique
    @Column
    account!: string;

    @Default(0)
    @Column({ type: DataType.DECIMAL })
    balance!: number;

    @HasMany(() => Card)
    cards!: Card[];

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @DeletedAt
    deletedAt!: Date;

    @ForeignKey(() => People)
    @Column({ type: DataType.UUID })
    personId!: string;

    @BelongsTo(() => People)
    person!: People;

    @HasMany(() => Transact)
    transactions!: Transact[];

    public createCard!: HasManyCreateAssociationMixin<Card, string>;

    public getCards!: HasManyGetAssociationsMixin<Card>;

    public createTransact!: HasManyCreateAssociationMixin<Transact, string>;

    public getTransacts!: HasManyGetAssociationsMixin<Transact>;
}

export default Account;
