import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  Unique,
  Default,
  ForeignKey,
  BelongsToMany,
} from "sequelize-typescript";
import { League } from "../League";
import { UserLeague } from "../UserLeague";

@Table
export class User extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  username: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  email: string;

  @Default(false)
  @Column(DataType.BOOLEAN)
  verified: boolean;

  @Default(false)
  @Column(DataType.BOOLEAN)
  admin: boolean;

  @Column(DataType.STRING)
  displayName: string;

  @Default(0)
  @Column(DataType.SMALLINT)
  points: number;

  @Column(DataType.STRING)
  verification_token: string;

  @Column(DataType.DATE)
  verification_expiry: string;

  @Column(DataType.STRING)
  forgot_password_token: string;

  @Column(DataType.DATE)
  forgot_password_expiry: string;

  @ForeignKey(() => League)
  @Column(DataType.STRING)
  favouriteLeagueName: string;

  @BelongsToMany(() => League, () => UserLeague)
  leagues: League[];
}
