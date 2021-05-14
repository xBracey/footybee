import React, { useState } from "react";

import { isMandatory, validateInputs } from "lib";
import { EditCard } from "../EditCard";
import { TextInput } from "../../Input/TextInput";
import { InputLabel } from "../styles";
import { Button } from "../../Button";

let hasBlurred = [false];

interface IGroupPlayerAddCard {
  onSave: (playerNames: string[]) => void;
}

export const GroupPlayerAddCard = ({ onSave }: IGroupPlayerAddCard) => {
  const [playerNames, setPlayerNames] = useState([""]);

  const inputValidation = playerNames.map((name, index) => ({
    value: name,
    hasBlurred: hasBlurred[index],
    validation: [isMandatory],
  }));

  const [validation, setValidation] = useState({
    errorMessages: [""],
    isDisabled: validateInputs(inputValidation).isDisabled,
  });

  const savePlayer = () => {
    onSave(playerNames);
  };

  const setName = (name: string, index: number) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = name;
    setPlayerNames(newPlayerNames);
  };

  const onBlurHandler = (index: number) => {
    hasBlurred[index] = true;

    const newValidation = validateInputs(inputValidation);

    setValidation(newValidation);
  };

  const playerNamesComponent = playerNames.map((name, index) => (
    <TextInput
      text={name}
      setText={newName => setName(newName, index)}
      onBlurHandler={() => onBlurHandler(index)}
      placeholder="Player Name"
      error={validation.errorMessages[index]}
    />
  ));

  const onAdd = () => {
    hasBlurred.push(false);

    inputValidation.push({
      value: "",
      hasBlurred: false,
      validation: [isMandatory],
    });

    setValidation(validateInputs(inputValidation));

    setPlayerNames([...playerNames, ""]);
  };

  return (
    <EditCard
      title={"New Players"}
      onSave={savePlayer}
      onDelete={() => {}}
      isDisabled={validation.isDisabled}
      isEdit={false}
    >
      {playerNamesComponent}
      <Button onClick={onAdd} text="Add" buttonType="blue" />
    </EditCard>
  );
};
