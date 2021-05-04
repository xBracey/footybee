import leagueSeed from "./league";
import playerSeed from "./player";
import teamSeed from "./team";
import userSeed from "./user";
import groupSeed from "./group";
import groupMatchSeed from "./groupMatch";

const seedData = async () => {
  await leagueSeed();
  await userSeed();
  await groupSeed();
  await teamSeed();
  await playerSeed();
  await groupMatchSeed();
};

export default seedData;
