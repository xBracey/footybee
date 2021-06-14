import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
} from "sequelize-typescript";
import { Round } from "../Round";
import { Team } from "../Team";

@Table
export class KnockoutMatch extends Model {
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

  @Column(DataType.TINYINT)
  homePenalties: number;

  @Column(DataType.TINYINT)
  awayPenalties: number;

  @ForeignKey(() => Round)
  @Column
  roundName: string;

  @ForeignKey(() => Team)
  @Column
  homeTeam: string;

  @ForeignKey(() => Team)
  @Column
  awayTeam: string;
}
