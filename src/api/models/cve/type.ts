import {
  validateString,
  validateDate,
  validateNumber,
  validateStringArray,
} from "../../lib/validation";

export enum Severity {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CRITICAL = "CRITICAL",
}

export default interface ICVE {
  id: string;
  severity: Severity;
  description: string;
  publishedDate: Date;
}

export interface IGetCVE {
  severity: Severity[];
  year: number;
}

export const isValidCVE = (data: any): data is ICVE => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { id, severity, description, publishedDate } = data;

  return (
    validateString(id, true) &&
    validateString(severity, true) &&
    validateString(description, true) &&
    validateDate(publishedDate, true)
  );
};

export const isValidGetCVE = (data: any): data is IGetCVE => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { severity, year } = data;

  return validateStringArray(severity) && validateNumber(year, true);
};
