import React, { useReducer, useState } from "react";
import Select from "react-select";
import { isMandatory, validateInputs } from "lib";
import { ITeamReducer, reducer } from "./TeamReducer";
import { EditCard } from "../EditCard";
import { TextInput } from "../../Input/TextInput";
import { InputLabel } from "../styles";

let hasBlurred = [false, false];

interface ITeamEditCard {
  groupLetters: string[];
  team: ITeamReducer;
  isEdit: boolean;
  onSave: () => void;
  onDelete: () => void;
}

export const TeamEditCard = ({
  groupLetters,
  team,
  isEdit,
  onSave,
  onDelete,
}: ITeamEditCard) => {
  const [state, dispatch]: [ITeamReducer, any] = useReducer(reducer, {
    groupLetter: team.groupLetter,
    name: team.name,
  });

  const { groupLetter, name } = state;

  const options = groupLetters.map(letter => ({
    value: letter,
    label: letter?.toUpperCase(),
  }));

  const [validation, setValidation] = useState({
    errorMessages: ["", ""],
    isDisabled: validateInputs([
      {
        value: groupLetter,
        hasBlurred: hasBlurred[0],
        validation: [isMandatory],
      },
      {
        value: name,
        hasBlurred: hasBlurred[1],
        validation: [isMandatory],
      },
    ]).isDisabled,
  });

  const onBlurHandler = (index: number) => {
    hasBlurred[index] = true;

    const newValidation = validateInputs([
      {
        value: groupLetter,
        hasBlurred: hasBlurred[0],
        validation: [isMandatory],
      },
      {
        value: name,
        hasBlurred: hasBlurred[1],
        validation: [isMandatory],
      },
    ]);

    setValidation(newValidation);
  };

  const customMenuStyle = {
    menu: provided => ({
      ...provided,
      zIndex: 100,
    }),
    container: provided => ({
      ...provided,
      width: "242px",
      marginBottom: "20px",
    }),
  };

  return (
    <EditCard
      title={team.name ?? "New Team"}
      onSave={onSave}
      onDelete={onDelete}
      isDisabled={validation.isDisabled}
      isEdit={isEdit}
    >
      <InputLabel>Group Letter</InputLabel>
      <Select
        options={options}
        value={{ value: groupLetter, label: groupLetter?.toUpperCase() }}
        onChange={groupLetter =>
          dispatch({ type: "edit", data: { groupLetter: groupLetter.value } })
        }
        onBlur={() => onBlurHandler(0)}
        styles={customMenuStyle}
      />
      <InputLabel>Team Name</InputLabel>
      <TextInput
        text={name}
        setText={name => dispatch({ type: "edit", data: { name } })}
        onBlurHandler={() => onBlurHandler(1)}
        placeholder="Team Name"
        error={validation.errorMessages[1]}
        isDisabled={isEdit}
      />
    </EditCard>
  );
};
