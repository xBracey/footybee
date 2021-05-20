import testSeed from "./test";

const seedData = async () => {
  if (process.env.NODE_ENV === "test" ) testSeed()
}

export default seedData;
