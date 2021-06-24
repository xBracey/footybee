import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import { KnockoutMatch } from "../KnockoutMatch";

@Table
export class Round extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  name: string;

  @HasMany(() => KnockoutMatch)
  matches: KnockoutMatch[];
}
