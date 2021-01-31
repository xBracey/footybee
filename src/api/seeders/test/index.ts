import leagueSeed from "./league";
import playerSeed from "./player";
import teamSeed from "./team";
import userSeed from "./user";

const seedData = async () => {
  await leagueSeed();
  await userSeed();
  await teamSeed();
  await playerSeed();
};

export default seedData;
