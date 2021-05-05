import React, { useReducer, useState } from "react";
import Select from "react-select";
import { isMandatory, isNotEqual, numberValidation, validateInputs } from "lib";
import { IGroupMatchReducer, reducer } from "./GroupMatchReducer";
import { EditCard } from "../EditCard";
import { TextInput } from "../../Input/TextInput";
import { customMenuStyle, EditFlex, EditFlexOne, InputLabel } from "../styles";
import { DateInput } from "components/Input";

let hasBlurred = [false, false, false, false];

interface IGroupMatchEditCard {
  teamNames: string[];
  groupMatch: IGroupMatchReducer;
  isEdit: boolean;
  onSave: () => void;
  onDelete: () => void;
}

export const GroupMatchEditCard = ({
  teamNames,
  groupMatch,
  isEdit,
  onSave,
  onDelete,
}: IGroupMatchEditCard) => {
  const [state, dispatch]: [IGroupMatchReducer, any] = useReducer(reducer, {
    date: groupMatch.date,
    homeTeam: groupMatch.homeTeam,
    awayTeam: groupMatch.awayTeam,
    homeTeamGoals: groupMatch.homeTeamGoals,
    awayTeamGoals: groupMatch.awayTeamGoals,
  });

  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, date } = state;

  const options = teamNames.map(name => ({
    value: name,
    label: name,
  }));

  const inputValidation = [
    {
      value: homeTeam,
      hasBlurred: hasBlurred[0],
      validation: [isMandatory, isNotEqual(awayTeam)],
    },
    {
      value: awayTeam,
      hasBlurred: hasBlurred[1],
      validation: [isMandatory],
    },
    {
      value: homeTeamGoals,
      hasBlurred: hasBlurred[2],
      validation: [numberValidation],
    },
    {
      value: awayTeamGoals,
      hasBlurred: hasBlurred[3],
      validation: [numberValidation],
    },
  ];

  const [validation, setValidation] = useState({
    errorMessages: ["", ""],
    isDisabled: validateInputs(inputValidation).isDisabled,
  });

  const onBlurHandler = (index: number) => {
    hasBlurred[index] = true;

    const newValidation = validateInputs(inputValidation);

    setValidation(newValidation);
  };

  return (
    <EditCard
      title={homeTeam && awayTeam ? `${homeTeam} vs ${awayTeam}` : "New Match"}
      onSave={onSave}
      onDelete={onDelete}
      isDisabled={validation.isDisabled}
      isEdit={isEdit}
    >
      <InputLabel>Date</InputLabel>
      <DateInput
        date={date ? new Date(date) : new Date()}
        setDate={date =>
          dispatch({
            type: "edit",
            data: { date: date.toString() },
          })
        }
      />
      <EditFlex>
        <EditFlexOne>
          <InputLabel>Home Team</InputLabel>
          <Select
            options={options}
            value={{ value: homeTeam, label: homeTeam }}
            onChange={homeTeam =>
              dispatch({
                type: "edit",
                data: { homeTeam: homeTeam.value },
              })
            }
            onBlur={() => onBlurHandler(0)}
            styles={customMenuStyle}
          />
          <TextInput
            text={homeTeamGoals}
            setText={homeTeamGoals => {
              if (numberValidation.validation(homeTeamGoals)) {
                dispatch({ type: "edit", data: { homeTeamGoals } });
              }
            }}
            onBlurHandler={() => onBlurHandler(2)}
            placeholder="Home Team Goals"
            error={validation.errorMessages[2]}
          />
        </EditFlexOne>
        <EditFlexOne>
          <InputLabel>Away Team</InputLabel>
          <Select
            options={options}
            value={{ value: awayTeam, label: awayTeam }}
            onChange={awayTeam =>
              dispatch({
                type: "edit",
                data: { awayTeam: awayTeam.value },
              })
            }
            onBlur={() => onBlurHandler(1)}
            styles={customMenuStyle}
          />
          <TextInput
            text={awayTeamGoals}
            setText={awayTeamGoals => {
              if (numberValidation.validation(awayTeamGoals)) {
                dispatch({ type: "edit", data: { awayTeamGoals } });
              }
            }}
            onBlurHandler={() => onBlurHandler(3)}
            placeholder="Away Team Goals"
            error={validation.errorMessages[3]}
          />
        </EditFlexOne>
      </EditFlex>
    </EditCard>
  );
};
