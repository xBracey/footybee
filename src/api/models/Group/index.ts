import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import { Team } from "..";

@Table
export class Group extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  letter: string;

  @HasMany(() => Team)
  teams: Team[];
}
