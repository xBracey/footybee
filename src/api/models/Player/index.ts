import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { Team } from "..";

@Table
export class Player extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  name: string;

  @ForeignKey(() => Team)
  @Column
  teamName: string;

  @BelongsTo(() => Team)
  team: Team;
}
