import React from "react";
import { MainContainer } from "./Main.styled";
import ICVE from "../../../api/models/cve/type";
import { SearchResults, GraphResults } from "..";

interface IMainProps {
  searchResults: ICVE[];
  graphResults: ICVE[];
  filter: boolean;
}

const Main = ({ searchResults, graphResults, filter }: IMainProps) => (
  <MainContainer filter={filter}>
    <SearchResults searchResults={searchResults} />
    <GraphResults graphResults={graphResults} />
  </MainContainer>
);

export default Main;
