import styled from "styled-components";
import { colours } from "theme";

interface IResultsTableOuterContainer {
  inverted: boolean;
}

export const ResultsTableOuterContainer = styled.div<
  IResultsTableOuterContainer
>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 32px);
  background-color: ${props =>
    props.inverted ? colours.yellow200 : colours.green200};
  color: ${props => (props.inverted ? colours.black : colours.white)};
  padding: 48px 16px;
`;

export const ResultsTableContainer = styled.div`
  width: 1000px;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 32px;
`;

export const TableContainer = styled.div``;

export const ResultTableTitle = styled.h2`
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 16px;
`;
