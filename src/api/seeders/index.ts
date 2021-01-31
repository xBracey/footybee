import testSeed from "./test";
import realSeed from "./real";

const seedData = async () =>
  process.env.NODE_ENV === "test" ? testSeed() : realSeed();

export default seedData;
