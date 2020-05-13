import express from "express";
import { sequelize } from "./models";
import seedData from "./seeders";

const app = express();
const port = 3000;
const force = process.env.FORCE === "true";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => res.send("Hello World!"));

sequelize.sync({ force }).then(async () => {
  if (force) {
    await seedData();
  }

  app.listen(port);
});

export default app;
