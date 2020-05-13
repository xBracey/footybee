import seedCVEs from "./cve";

const seedData = async () => {
  await seedCVEs();
};

export default seedData;
