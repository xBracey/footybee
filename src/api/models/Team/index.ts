import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
} from "sequelize-typescript";

@Table
export class Team extends Model<Team> {
  @PrimaryKey
  @Column(DataType.STRING)
  name: string;
}
