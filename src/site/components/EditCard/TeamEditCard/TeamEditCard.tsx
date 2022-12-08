import React, { useReducer, useState } from "react";
import Select from "react-select";
import {
  isMandatory,
  numberValidation,
  scoreValidation,
  validateInputs,
} from "lib";
import { ITeamReducer, reducer } from "./TeamReducer";
import { EditCard } from "../EditCard";
import { TextInput } from "../../Input/TextInput";
import { InputLabel } from "../styles";
import { SelectInput } from "components/Input";

let hasBlurred = [false, false, false];

interface ITeamEditCard {
  groupLetters: string[];
  team: ITeamReducer;
  isEdit: boolean;
  onSave: (team: ITeamReducer) => void;
  onDelete: () => void;
  roundNames: string[];
}

export const TeamEditCard = ({
  groupLetters,
  team,
  isEdit,
  onSave,
  onDelete,
  roundNames,
}: ITeamEditCard) => {
  const [state, dispatch]: [ITeamReducer, any] = useReducer(reducer, {
    groupLetter: team.groupLetter,
    name: team.name,
    roundName: team.roundName,
    wins: team.wins,
  });

  const { groupLetter, name, roundName, wins } = state;

  const options = groupLetters.map(letter => ({
    value: letter,
    label: letter?.toUpperCase(),
  }));

  const [validation, setValidation] = useState({
    errorMessages: ["", "", ""],
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
      {
        value: wins,
        hasBlurred: hasBlurred[2],
        validation: [scoreValidation],
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
      {
        value: wins,
        hasBlurred: hasBlurred[2],
        validation: [scoreValidation],
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

  const saveTeam = () => {
    onSave(state);
  };

  return (
    <EditCard
      title={team.name ?? "New Team"}
      onSave={saveTeam}
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
      <InputLabel>Tournament Position</InputLabel>
      <SelectInput
        option={roundName}
        options={roundNames.map(name => ({
          value: name,
          label: name,
        }))}
        setOption={roundName => dispatch({ type: "edit", data: { roundName } })}
        placeholder="Tournament Position"
      />
      <InputLabel>Wins</InputLabel>
      <TextInput
        text={wins}
        setText={wins => {
          if (numberValidation.validation(wins)) {
            dispatch({ type: "edit", data: { wins } });
          }
        }}
        onBlurHandler={() => onBlurHandler(2)}
        placeholder="Wins"
        error={validation.errorMessages[2]}
      />
    </EditCard>
  );
};
