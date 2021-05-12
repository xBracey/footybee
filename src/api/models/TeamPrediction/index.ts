import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
} from "sequelize-typescript";
import { User, Team } from "..";

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
}
