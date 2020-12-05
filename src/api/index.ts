import { sequelize } from "./config";
import seedData from "./seeders";
import app from "./app";

const port = 3000;
const force = process.env.FORCE === "true";

sequelize.sync({ force }).then(async () => {
  if (force) {
    await seedData();
  }

  if (process.env.NODE_ENV !== "test") {
    app.listen(port);
  }
});

export default app;
