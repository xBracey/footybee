import { isMandatory, validateInputs } from "lib";
import React, { useReducer, useState } from "react";
import { EditCard } from "../EditCard";
import { InputLabel } from "../styles";
import { TextInput } from "../../Input/TextInput";
import { IRoundReducer, reducer } from "./RoundReducer";

let hasBlurred = [false, false];

interface IRoundEditCard {
  round: IRoundReducer;
  isEdit: boolean;
  onSave: (round: IRoundReducer) => void;
  onDelete: () => void;
}

export const RoundEditCard = ({
  round,
  isEdit,
  onSave,
  onDelete,
}: IRoundEditCard) => {
  const [state, dispatch]: [IRoundReducer, any] = useReducer(reducer, {
    name: round.name,
  });

  const { name } = state;

  const [validation, setValidation] = useState({
    errorMessages: [""],
    isDisabled: validateInputs([
      {
        value: name,
        hasBlurred: hasBlurred[0],
        validation: [isMandatory],
      },
    ]).isDisabled,
  });

  const onBlurHandler = (index: number) => {
    hasBlurred[index] = true;

    const newValidation = validateInputs([
      {
        value: name,
        hasBlurred: hasBlurred[0],
        validation: [isMandatory],
      },
    ]);

    setValidation(newValidation);
  };

  const saveRound = () => {
    onSave(state);
  };

  return (
    <EditCard
      title={round.name ? `Round ${round.name}` : "New Round"}
      onSave={saveRound}
      onDelete={onDelete}
      isDisabled={validation.isDisabled}
      isEdit={isEdit}
    >
      <InputLabel>Round Name</InputLabel>
      <TextInput
        text={name}
        setText={name => dispatch({ type: "edit", data: { name } })}
        onBlurHandler={() => onBlurHandler(0)}
        placeholder="Round Name"
        error={validation.errorMessages[0]}
        isDisabled={isEdit}
      />
    </EditCard>
  );
};
