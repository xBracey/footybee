import { sequelize } from "../src/api/models";
import seedData from "../src/api/seeders";

const setup = async () => {
  await sequelize.sync();
  await seedData();
};

export default setup;
