import React, { useReducer, useState } from "react";
import Select from "react-select";
import { isMandatory, isNotEqual, scoreValidation, validateInputs } from "lib";
import { IKnockoutMatchReducer, reducer } from "./KnockoutMatchReducer";
import { EditCard } from "../EditCard";
import { TextInput } from "../../Input/TextInput";
import { customMenuStyle, EditFlex, EditFlexOne, InputLabel } from "../styles";
import { DateInput } from "components/Input";

let hasBlurred = [false, false, false, false, false, false];

interface IKnockoutMatchEditCard {
  teamNames: string[];
  knockoutMatch: IKnockoutMatchReducer;
  isEdit: boolean;
  onSave: (knockoutMatch: IKnockoutMatchReducer) => void;
  onDelete: () => void;
}

export const KnockoutMatchEditCard = ({
  teamNames,
  knockoutMatch,
  isEdit,
  onSave,
  onDelete,
}: IKnockoutMatchEditCard) => {
  const [state, dispatch]: [IKnockoutMatchReducer, any] = useReducer(reducer, {
    date: knockoutMatch.date,
    position: knockoutMatch.position,
    homeTeam: knockoutMatch.homeTeam,
    awayTeam: knockoutMatch.awayTeam,
    homeGoals: knockoutMatch.homeGoals,
    awayGoals: knockoutMatch.awayGoals,
    homePenalties: knockoutMatch.homePenalties,
    awayPenalties: knockoutMatch.awayPenalties,
  });

  const {
    homeTeam,
    awayTeam,
    homeGoals,
    awayGoals,
    date,
    position,
    homePenalties,
    awayPenalties,
  } = state;

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

  const saveKnockoutMatch = () => {
    onSave(state);
  };

  return (
    <EditCard
      title={homeTeam && awayTeam ? `${homeTeam} vs ${awayTeam}` : "New Match"}
      onSave={saveKnockoutMatch}
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
            data: { date: date.toISOString() },
          })
        }
      />

      <InputLabel>Position</InputLabel>
      <TextInput
        text={position}
        setText={position =>
          dispatch({
            type: "edit",
            data: { position },
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
            text={homeGoals}
            setText={homeGoals => {
              if (scoreValidation.validation(homeGoals)) {
                dispatch({ type: "edit", data: { homeGoals } });
              }
            }}
            onBlurHandler={() => onBlurHandler(2)}
            placeholder="Home Team Goals"
            error={validation.errorMessages[2]}
          />
          <TextInput
            text={homePenalties}
            setText={homePenalties => {
              if (scoreValidation.validation(homePenalties)) {
                dispatch({ type: "edit", data: { homePenalties } });
              }
            }}
            onBlurHandler={() => onBlurHandler(4)}
            placeholder="Home Team Penalties"
            error={validation.errorMessages[4]}
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
            text={awayGoals}
            setText={awayGoals => {
              if (scoreValidation.validation(awayGoals)) {
                dispatch({ type: "edit", data: { awayGoals } });
              }
            }}
            onBlurHandler={() => onBlurHandler(3)}
            placeholder="Away Team Goals"
            error={validation.errorMessages[3]}
          />
          <TextInput
            text={awayPenalties}
            setText={awayPenalties => {
              if (scoreValidation.validation(awayPenalties)) {
                dispatch({ type: "edit", data: { awayPenalties } });
              }
            }}
            onBlurHandler={() => onBlurHandler(5)}
            placeholder="Away Team Penalties"
            error={validation.errorMessages[5]}
          />
        </EditFlexOne>
      </EditFlex>
    </EditCard>
  );
};
