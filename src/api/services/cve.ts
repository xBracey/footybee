import { models } from "../models";
import ICVE from "../models/cve/type";
import CVE from "../models/cve";

interface ICVEResponse {
  cve: CVE | null;
  error?: any;
}

interface ICVEsResponse {
  cves: CVE[] | null;
  error?: any;
}

export const addCVE = async (cveData: ICVE): Promise<ICVEResponse> => {
  try {
    const cve = await models.CVE.create(cveData);
    return { cve };
  } catch (error) {
    return { error, cve: null };
  }
};

export const addCVEs = async (cvesData: ICVE[]): Promise<ICVEsResponse> => {
  try {
    const cves = await models.CVE.bulkCreate(cvesData);
    return { cves };
  } catch (error) {
    return { error, cves: null };
  }
};
