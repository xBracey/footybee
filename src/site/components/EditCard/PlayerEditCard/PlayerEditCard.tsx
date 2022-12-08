import React, { useReducer, useState } from "react";
import Select from "react-select";
import {
  isMandatory,
  numberValidation,
  scoreValidation,
  validateInputs,
} from "lib";
import { IPlayerReducer, reducer } from "./PlayerReducer";
import { EditCard } from "../EditCard";
import { TextInput } from "../../Input/TextInput";
import { InputLabel } from "../styles";

let hasBlurred = [false, false];

interface IPlayerEditCard {
  teamNames: string[];
  player: IPlayerReducer;
  isEdit: boolean;
  onSave: (player: IPlayerReducer) => void;
  onDelete: () => void;
}

export const PlayerEditCard = ({
  teamNames,
  player,
  isEdit,
  onSave,
  onDelete,
}: IPlayerEditCard) => {
  const [state, dispatch]: [IPlayerReducer, any] = useReducer(reducer, {
    teamName: player.teamName,
    name: player.name,
    goals: player.goals,
  });

  const { teamName, name, goals } = state;

  const options = teamNames.map(letter => ({
    value: letter,
    label: letter,
  }));

  const inputValidation = [
    {
      value: teamName,
      hasBlurred: hasBlurred[0],
      validation: [isMandatory],
    },
    {
      value: name,
      hasBlurred: hasBlurred[1],
      validation: [isMandatory],
    },
    {
      value: goals,
      hasBlurred: hasBlurred[2],
      validation: [scoreValidation],
    },
  ];

  const [validation, setValidation] = useState({
    errorMessages: ["", "", ""],
    isDisabled: validateInputs(inputValidation).isDisabled,
  });

  const onBlurHandler = (index: number) => {
    hasBlurred[index] = true;

    const newValidation = validateInputs(inputValidation);

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

  const savePlayer = () => {
    onSave(state);
  };

  return (
    <EditCard
      title={player.name ?? "New Player"}
      onSave={savePlayer}
      onDelete={onDelete}
      isDisabled={validation.isDisabled}
      isEdit={isEdit}
    >
      <InputLabel>Team Name</InputLabel>
      <Select
        options={options}
        value={{ value: teamName, label: teamName }}
        onChange={teamName =>
          dispatch({ type: "edit", data: { teamName: teamName.value } })
        }
        onBlur={() => onBlurHandler(0)}
        styles={customMenuStyle}
      />
      <InputLabel>Player Name</InputLabel>
      <TextInput
        text={name}
        setText={name => dispatch({ type: "edit", data: { name } })}
        onBlurHandler={() => onBlurHandler(1)}
        placeholder="Player Name"
        error={validation.errorMessages[1]}
        isDisabled={isEdit}
      />
      <InputLabel>Goals</InputLabel>
      <TextInput
        text={goals}
        setText={goals => {
          if (numberValidation.validation(goals)) {
            dispatch({ type: "edit", data: { goals } });
          }
        }}
        onBlurHandler={() => onBlurHandler(2)}
        placeholder="Goals"
        error={validation.errorMessages[2]}
      />
    </EditCard>
  );
};
