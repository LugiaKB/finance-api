import {
    AllowNull,
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    Default,
    DeletedAt,
    ForeignKey,
    Length,
    Model,
    PrimaryKey,
    Table,
    Unique,
    UpdatedAt,
} from "sequelize-typescript";
import Account from "./AccountModel";

@Table({
    tableName: "card",
})
class Card extends Model {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column({ type: DataType.UUID })
    id!: string;

    @AllowNull(false)
    @Column({ type: DataType.ENUM("physical", "virtual") })
    type!: string;

    @AllowNull(false)
    @Unique
    @Column
    number!: string;

    @Length({
        min: 3,
        max: 3,
    })
    @AllowNull(false)
    @Column
    cvv!: string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @DeletedAt
    deletedAt!: Date;

    @ForeignKey(() => Account)
    @Column({ type: DataType.UUID })
    accountId!: string;

    @BelongsTo(() => Account)
    account!: Account;
}

export default Card;
