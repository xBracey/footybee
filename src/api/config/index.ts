import {
  League,
  User,
  Player,
  Team,
  Group,
  GroupMatch,
  TeamPrediction,
  GroupMatchPrediction,
} from "../models";
import { Sequelize } from "sequelize-typescript";
import fs from "fs";

/* istanbul ignore next */
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  process.env.NODE_ENV === "test"
    ? { dialect: "sqlite", storage: "./test_database.sqlite", logging: false }
    : { dialect: "mysql", host: "mysql" }
);

const models = {
  League,
  User,
  Player,
  Team,
  Group,
  GroupMatch,
  TeamPrediction,
  GroupMatchPrediction,
};

sequelize.addModels(Object.values(models));

export { models, sequelize };
