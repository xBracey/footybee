import React from "react";
import { AsyncSelectInputContainer } from "./AsyncSelectInput.styled";
import AsyncSelect from "react-select/async";

interface IOption {
  value: string;
  label: string;
}

interface IAsyncSelectInput {
  option: IOption;
  setOption: (option: IOption) => void;
  loadOptions: (
    inputValue: string,
    callback: (options: IOption[]) => void
  ) => void;
  placeholder: string;
}

export const AsyncSelectInput = ({
  option,
  setOption,
  loadOptions,
  placeholder,
}: IAsyncSelectInput) => {
  return (
    <AsyncSelectInputContainer>
      <AsyncSelect
        value={option}
        onChange={setOption}
        placeholder={placeholder}
        loadOptions={loadOptions}
      />
    </AsyncSelectInputContainer>
  );
};
