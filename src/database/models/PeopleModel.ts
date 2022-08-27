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
import Account from "./AccountModel";

@Table({
  tableName: "people",
})
class People extends Model {
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id!: string;

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
}

export default People;
