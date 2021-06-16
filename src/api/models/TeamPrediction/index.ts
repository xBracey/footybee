import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  Default,
  BelongsTo,
} from "sequelize-typescript";
import { User, Team, Round } from "..";

@Table
export class TeamPrediction extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column
  username: string;

  @PrimaryKey
  @ForeignKey(() => Team)
  @Column
  teamName: string;

  @Column(DataType.SMALLINT)
  groupPosition: number;

  @Default(0)
  @Column(DataType.SMALLINT)
  points: number;

  @ForeignKey(() => Round)
  @Column
  roundName: string;

  @BelongsTo(() => Round)
  round: Round;
}
