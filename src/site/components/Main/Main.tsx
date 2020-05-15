import React from "react";
import { MainContainer } from "./Main.styled";
import ICVE from "../../../api/models/cve/type";

interface IMainProps {
  searchResults: ICVE[];
  graphResults: ICVE[];
  filter: boolean;
}

const Main = ({ searchResults, graphResults, filter }: IMainProps) => (
  <MainContainer filter={filter}></MainContainer>
);

export default Main;
