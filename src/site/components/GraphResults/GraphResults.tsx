import React from "react";
import { GraphResultsContainer, ZeroState } from "./GraphResults.styled";
import ICVE from "../../../api/models/cve/type";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { parseGraphResults } from "../../lib/parseGraphResults";
import { COLORS } from "../../lib/constants";
import useDimensions from "react-use-dimensions";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const colors = [COLORS.PURPLE, COLORS.RED, COLORS.LIGHT_BLUE];

interface IGraphResultProps {
  graphResults: ICVE[];
}

const GraphResults = ({ graphResults }: IGraphResultProps) => {
  const graphDataParsed = parseGraphResults(graphResults);
  const [containerRef, { width }] = useDimensions();

  console.log(width);

  const options = {
    chart: {
      width,
    },
    title: {
      text: graphDataParsed.title,
    },
    xAxis: {
      categories: months,
    },
    series: graphDataParsed.severities,
    colors,
  };

  if (!graphResults.length) {
    return (
      <GraphResultsContainer ref={containerRef}>
        <ZeroState>No graph results found</ZeroState>
      </GraphResultsContainer>
    );
  }

  return (
    <GraphResultsContainer ref={containerRef}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </GraphResultsContainer>
  );
};

export default GraphResults;
