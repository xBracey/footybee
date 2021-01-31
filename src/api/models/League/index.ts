import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
} from "sequelize-typescript";

@Table
export class League extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  leagueName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  displayName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string;

  //   @BelongsToMany(() => user, () => userLeague)
  //   users: user[];
}
