import React from "react";
import { FiltersContainer } from "./Filters.styled";
import ICVE from "../../../api/models/cve/type";

interface IFiltersProps {
  filter: boolean;
  setGraphResults: (graphResults: ICVE[]) => void;
}

const Filters = ({ filter, setGraphResults }: IFiltersProps) => (
  <FiltersContainer filter={filter}></FiltersContainer>
);

export default Filters;
