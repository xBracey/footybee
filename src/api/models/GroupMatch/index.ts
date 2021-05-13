import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
} from "sequelize-typescript";
import { Group } from "../Group";
import { Team } from "../Team";

@Table
export class GroupMatch extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.BIGINT)
  id: number;

  @Column(DataType.DATE)
  date: Date;

  @Column(DataType.TINYINT)
  homeGoals: number;

  @Column(DataType.TINYINT)
  awayGoals: number;

  @ForeignKey(() => Group)
  @Column
  groupLetter: string;

  @ForeignKey(() => Team)
  @Column
  homeTeam: string;

  @ForeignKey(() => Team)
  @Column
  awayTeam: string;
}
