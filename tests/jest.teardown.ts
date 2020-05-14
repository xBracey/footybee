import { sequelize } from "../src/api/models";

const teardown = async () => {
  await sequelize.drop();
};

export default teardown;
