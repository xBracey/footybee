import {
  DataType,
  Table,
  Column,
  Model,
  AllowNull,
  PrimaryKey,
} from "sequelize-typescript";

@Table
export default class CVE extends Model<CVE> {
  @PrimaryKey
  @Column(DataType.STRING)
  id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  severity: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  publishedDate: Date;
}
