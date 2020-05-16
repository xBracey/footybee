import ICVE from "../../api/models/cve/type";

interface ISingleSeverity {
  data: number[];
  name: string;
}

interface IGraphData {
  severities: ISingleSeverity[];
  title: string;
}

export const parseGraphResults = (graphResults: ICVE[]): IGraphData => {
  const severitiesObject = {};
  let title = "";

  graphResults.forEach((result, index) => {
    const resultDate = new Date(result.publishedDate);

    if (index === 0) {
      title = `CVE Analysis for ${resultDate.getFullYear()}`;
    }

    if (!severitiesObject[result.severity]) {
      severitiesObject[result.severity] = {
        data: Array(12).fill(0),
        name: result.severity,
      };
    }

    const resultMonth = resultDate.getMonth();
    severitiesObject[result.severity].data[resultMonth]++;
  });

  return { severities: Object.values(severitiesObject), title };
};
