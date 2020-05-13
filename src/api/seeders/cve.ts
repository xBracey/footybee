import { addCVEs } from "./../services/cve";
import convertRawData from "../lib/convertRawData";

const seedCVEs = async () => {
  const CVEData = convertRawData();

  await addCVEs(CVEData);
};

export default seedCVEs;
