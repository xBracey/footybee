import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  Unique,
  Default,
} from "sequelize-typescript";

@Table
export class User extends Model<User> {
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
  verification_token: string;

  @Column(DataType.DATE)
  verification_expiry: string;

  @Column(DataType.STRING)
  forgot_password_token: string;

  @Column(DataType.DATE)
  forgot_password_expiry: string;
}
