import { sequelize } from "../src/api/config";
import seedData from "../src/api/seeders";

const setup = async () => {
  await sequelize.drop();
  await sequelize.sync();
  await seedData();
};

export default setup;
