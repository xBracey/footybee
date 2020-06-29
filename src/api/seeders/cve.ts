import { addCVEs } from "./../services/cve";

const seedCVEs = async () => {
  await addCVEs([]);
};

export default seedCVEs;
