import testSeed from "./test";

const seedData = async () =>
  process.env.NODE_ENV === "test" ? testSeed() : () => {};

export default seedData;
