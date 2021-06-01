import React from "react";
import { SelectInputContainer } from "./SelectInput.styled";
import Select from "react-select";

interface IOption {
  value: string;
  label: string;
}

interface ISelectInput {
  option: IOption;
  options: IOption[];
  setOption: (option: IOption) => void;
  placeholder: string;
}

export const SelectInput = ({
  option,
  options,
  setOption,
  placeholder,
}: ISelectInput) => {
  return (
    <SelectInputContainer>
      <Select
        value={option}
        options={options}
        onChange={setOption}
        placeholder={placeholder}
      />
    </SelectInputContainer>
  );
};
