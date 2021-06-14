import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  Default,
} from "sequelize-typescript";
import { Player, Group, User, TeamPrediction } from "..";

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

  @BelongsToMany(() => User, () => TeamPrediction)
  usersPredictions: User[];

  @Default(0)
  @Column(DataType.SMALLINT)
  tournamentPosition: number;
}
