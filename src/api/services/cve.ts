import { models } from "../models";
import ICVE, { Severity } from "../models/cve/type";
import CVE from "../models/cve";
import { Op } from "sequelize";

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

export const getCVEs = async (
  year: number,
  severity: Severity[]
): Promise<ICVEsResponse> => {
  const cves = await models.CVE.findAll({
    where: {
      severity: {
        [Op.in]: severity,
      },
      publishedDate: {
        [Op.lt]: new Date(`${year + 1}-01-01T00:00:00`),
        [Op.gt]: new Date(`${year}-01-01T00:00:00`),
      },
    },
  });
  return { cves };
};

export const searchCVEs = async (search: string): Promise<ICVEsResponse> => {
  const cves = await models.CVE.findAll({
    where: {
      id: {
        [Op.like]: `%${search}%`,
      },
    },
  });
  return { cves };
};
