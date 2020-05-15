import React, { useState, ChangeEvent } from "react";
import {
  FilterToggleContainer,
  Switch,
  Checkbox,
  Slider,
} from "./FilterToggle.styled";

interface IFilterToggleProps {
  setFilter: (filter: boolean) => void;
  filter: boolean;
}

const FilterToggle = ({ setFilter, filter }: IFilterToggleProps) => {
  const onChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.checked);
  };

  return (
    <FilterToggleContainer>
      Show/Hide Filters
      <Switch>
        <Checkbox type="checkbox" checked={filter} onChange={onChecked} />
        <Slider />
      </Switch>
    </FilterToggleContainer>
  );
};

export default FilterToggle;
