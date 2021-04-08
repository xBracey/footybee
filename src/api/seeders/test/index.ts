import leagueSeed from "./league";
import playerSeed from "./player";
import teamSeed from "./team";
import userSeed from "./user";
import groupSeed from "./group";

const seedData = async () => {
  await leagueSeed();
  await userSeed();
  await groupSeed();
  await teamSeed();
  await playerSeed();
};

export default seedData;
