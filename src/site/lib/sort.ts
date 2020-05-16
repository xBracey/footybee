import { Severity } from "../../api/models/cve/type";

export const sortBySeverity = (valueA: Severity, valueB: Severity) => {
  const severityOrder = {
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2,
    CRITICAL: 3,
  };

  return severityOrder[valueA] - severityOrder[valueB];
};
