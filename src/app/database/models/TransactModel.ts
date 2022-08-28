import {
    AllowNull,
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    Default,
    DeletedAt,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
} from "sequelize-typescript";
import Account from "./AccountModel";

@Table({
    tableName: "transaction",
})
class Transact extends Model {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column({ type: DataType.UUID })
    id!: string;

    @AllowNull(false)
    @Column({ type: DataType.DECIMAL })
    value!: number;

    @Column
    description!: string;

    @ForeignKey(() => Account)
    @Column(DataType.UUID)
    accountId!: string;

    @BelongsTo(() => Account)
    account!: Account;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @DeletedAt
    deletedAt!: Date;
}

export default Transact;
