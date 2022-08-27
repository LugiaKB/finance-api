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
import Card from "./CardModel";
import People from "./PeopleModel";

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

    @AllowNull(false)
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

    public getTableName() {
        return "account";
    }
}

export default Account;
