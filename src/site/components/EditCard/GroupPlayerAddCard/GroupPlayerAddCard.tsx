import React, { useState } from "react";

import { isMandatory, validateInputs } from "lib";
import { EditCard } from "../EditCard";
import { TextInput } from "../../Input/TextInput";
import { Button } from "../../Button";
import { IPlayer } from "src/site/redux/reducers/players";
import {
  CurrentPlayer,
  CurrentPlayersContainer,
} from "./GroupPlayerAddCard.styled";

let hasBlurred = [false];

interface IGroupPlayerAddCard {
  onSave: (playerNames: string[]) => void;
  teamPlayers: IPlayer[];
}

export const GroupPlayerAddCard = ({
  onSave,
  teamPlayers,
}: IGroupPlayerAddCard) => {
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

  const currentPlayers = teamPlayers.map(player => (
    <CurrentPlayer>{player.name}</CurrentPlayer>
  ));

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
      <Button onClick={onAdd} text="Add Another Player" buttonType="blue" />
      <CurrentPlayersContainer>
        <h3>Current Players</h3>
        {currentPlayers}
      </CurrentPlayersContainer>
    </EditCard>
  );
};
