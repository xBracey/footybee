import React, { useState } from "react";
import {
  FiltersContainer,
  FilterSelect,
  FilterHeader,
  SingleFilter,
  GenerateGraphContainer,
  GenerateGraphButton,
  customSelectStyles,
} from "./Filters.styled";
import ICVE from "../../../api/models/cve/type";
import { yearOptions, severityOptions } from "./Filters.data";

interface IFiltersProps {
  filter: boolean;
  setGraphResults: (graphResults: ICVE[]) => void;
}

const Filters = ({ filter, setGraphResults }: IFiltersProps) => {
  if (!filter) {
    return <FiltersContainer filter={filter} />;
  }

  const [yearValue, setYear] = useState(null);
  const [severitiesValue, setSeverities] = useState([]);

  const onYearChange = event => {
    setYear(event);
  };

  const onSeveritiesChange = event => {
    if (event) {
      setSeverities(event);
    } else {
      setSeverities([]);
    }
  };

  const onSubmit = async event => {
    event.preventDefault();
    if (yearValue && severitiesValue.length) {
      const year = parseInt(yearValue.value);
      const severity = severitiesValue.map(
        severitiesSingleValue => severitiesSingleValue.value
      );

      const response = await fetch(`/api/cve`, {
        method: "POST",
        body: JSON.stringify({
          year,
          severity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseJSON: ICVE[] = await response.json();

      if (response.ok) {
        setGraphResults(responseJSON);
      }
    }
  };

  return (
    <FiltersContainer filter={filter} onSubmit={onSubmit}>
      <SingleFilter>
        <FilterHeader>Select a single year</FilterHeader>
        <FilterSelect
          options={yearOptions}
          styles={customSelectStyles}
          value={yearValue}
          onChange={onYearChange}
        />
      </SingleFilter>
      <SingleFilter>
        <FilterHeader>Select multiple severities</FilterHeader>
        <FilterSelect
          options={severityOptions}
          styles={customSelectStyles}
          isMulti
          value={severitiesValue}
          onChange={onSeveritiesChange}
        />
      </SingleFilter>
      <GenerateGraphContainer>
        <GenerateGraphButton type="submit" value={"Generate Graph"} />
      </GenerateGraphContainer>
    </FiltersContainer>
  );
};

export default Filters;