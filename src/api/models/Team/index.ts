import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import { Player } from "..";

@Table
export class Team extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  name: string;

  @HasMany(() => Player)
  players: Player[];
}
