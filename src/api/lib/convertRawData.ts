import ICVE from "../models/cve/type";

const CVEJSON = require("../data/CVE.json");

const checkValidItem = (item: any, index: number): boolean => {
  return (
    item &&
    item.cve &&
    item.cve.CVE_data_meta &&
    item.cve.CVE_data_meta.ID &&
    item.cve.description &&
    item.cve.description.description_data &&
    typeof item.cve.description.description_data === "object" &&
    item.cve.description.description_data.find(
      data => data.lang === "en" && data.value
    ) &&
    item.impact &&
    item.impact.baseMetricV2 &&
    item.impact.baseMetricV2.severity &&
    item.publishedDate
  );
};

const convertRawData = (): ICVE[] => {
  const CVEItems: any[] = CVEJSON.CVE_Items;

  const CVEFiltered = CVEItems.filter(checkValidItem);

  const CVEConverted = CVEFiltered.map((item: any) => {
    return {
      id: item.cve.CVE_data_meta.ID,
      severity: item.impact.baseMetricV2.severity,
      description: item.cve.description.description_data.find(
        data => data.lang === "en" && data.value
      ).value,
      publishedDate: item.publishedDate,
    };
  });

  console.log(CVEConverted.length);

  return CVEConverted;
};

export default convertRawData;
