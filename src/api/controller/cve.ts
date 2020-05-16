import { validateString } from "./../lib/validation";
import { isValidGetCVE, IGetCVE } from "./../models/cve/type";
import { getCVEs, searchCVEs } from "./../services/cve";
import IControllerResponse from "./controller";

export const handleError = (error: any): IControllerResponse => {
  return { status: 400, error: "Unknown error has occurred" };
};

export const getController = async ({
  year,
  severity,
}: IGetCVE): Promise<IControllerResponse> => {
  console.log({ year, severity });

  if (!isValidGetCVE({ year, severity })) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, cves } = await getCVEs(year, severity);

  if (!error) {
    return { status: 200, response: cves };
  }

  return handleError(error);
};

export const searchController = async (search: string) => {
  if (!validateString(search, true)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, cves } = await searchCVEs(search);

  if (!error) {
    return { status: 200, response: cves };
  }

  return handleError(error);
};
