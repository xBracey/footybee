import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
} from "sequelize-typescript";

@Table
export class Player extends Model<Player> {
  @PrimaryKey
  @Column(DataType.STRING)
  name: string;
}
