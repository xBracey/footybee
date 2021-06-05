import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  BelongsToMany,
  Unique,
} from "sequelize-typescript";
import { User } from "../User";
import { UserLeague } from "../UserLeague";

@Table
export class League extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  code: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  leagueName: string;

  @BelongsToMany(() => User, () => UserLeague)
  users: User[];
}
