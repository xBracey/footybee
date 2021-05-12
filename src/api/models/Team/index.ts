import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Player, Group } from "..";

@Table
export class Team extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  name: string;

  @HasMany(() => Player)
  players: Player[];

  @Column(DataType.SMALLINT)
  groupPosition: number;

  @ForeignKey(() => Group)
  @Column
  groupLetter: string;

  @BelongsTo(() => Group)
  group: Group;
}
