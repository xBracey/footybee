import leagueSeed from "./league";
import userSeed from "./user";

const seedData = async () => {
  await leagueSeed();
  await userSeed();
};

export default seedData;
