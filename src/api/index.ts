import { sequelize } from "./config";
import seedData from "./seeders";
import express from "express";
import app from "./app";

const force = process.env.FORCE === "true";

sequelize.sync({ force }).then(async () => {
  if (force) {
    await seedData();
  }
});

export const testApp = express();
testApp.use(app);

export default app;
