import { isMandatory, validateInputs } from "lib";
import React, { useReducer, useState } from "react";
import { EditCard } from "../EditCard";
import { InputLabel } from "../styles";
import { TextInput } from "../../Input/TextInput";
import { IGroupReducer, reducer } from "./GroupReducer";

let hasBlurred = [false, false];

interface IGroupEditCard {
  group: IGroupReducer;
  isEdit: boolean;
  onSave: (group: IGroupReducer) => void;
  onDelete: () => void;
}

export const GroupEditCard = ({
  group,
  isEdit,
  onSave,
  onDelete,
}: IGroupEditCard) => {
  const [state, dispatch]: [IGroupReducer, any] = useReducer(reducer, {
    letter: group.letter,
  });

  const { letter } = state;

  const [validation, setValidation] = useState({
    errorMessages: [""],
    isDisabled: validateInputs([
      {
        value: letter,
        hasBlurred: hasBlurred[0],
        validation: [isMandatory],
      },
    ]).isDisabled,
  });

  const onBlurHandler = (index: number) => {
    hasBlurred[index] = true;

    const newValidation = validateInputs([
      {
        value: letter,
        hasBlurred: hasBlurred[0],
        validation: [isMandatory],
      },
    ]);

    setValidation(newValidation);
  };

  const saveGroup = () => {
    onSave(state);
  };

  return (
    <EditCard
      title={group.letter ? `Group ${group.letter}` : "New Group"}
      onSave={saveGroup}
      onDelete={onDelete}
      isDisabled={validation.isDisabled}
      isEdit={isEdit}
    >
      <InputLabel>Group Letter</InputLabel>
      <TextInput
        text={letter}
        setText={letter => dispatch({ type: "edit", data: { letter } })}
        onBlurHandler={() => onBlurHandler(0)}
        placeholder="Group Letter"
        error={validation.errorMessages[0]}
        isDisabled={isEdit}
      />
    </EditCard>
  );
};
