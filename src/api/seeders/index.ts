import fs from "fs";
import { sequelize } from "../config";
import testSeed from "./test";

const sql = fs.readFileSync("./sql/footybee.sql", "utf8");

const seedData = async () =>
  process.env.NODE_ENV === "test" ? testSeed() : sequelize.query(sql);

export default seedData;
