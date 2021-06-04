import { Button, TextInput } from "components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewLeague, addUserLeague } from "redux/actions";
import {
  AddLeagueDescription,
  AddLeagueFlex,
  AddLeagueText,
  SingleAddLeague,
} from "../HomePage.styled";

export const AddLeague = () => {
  const dispatch = useDispatch();

  const [newLeagueName, setNewLeagueName] = useState("");
  const [leagueName, setLeagueName] = useState("");

  const onSubmitNew = () => {
    if (newLeagueName !== "") {
      dispatch(addNewLeague(newLeagueName));
    }
  };

  const onSubmitExisting = () => {
    if (leagueName !== "") {
      dispatch(addUserLeague(leagueName));
    }
  };

  return (
    <AddLeagueFlex>
      <SingleAddLeague>
        <AddLeagueText>Create New League</AddLeagueText>
        <AddLeagueDescription>
          Create a new league for your friends to join and compete in!
        </AddLeagueDescription>
        <AddLeagueFlex>
          <TextInput text={newLeagueName} setText={setNewLeagueName} />
          <Button
            text={"Create"}
            onClick={onSubmitNew}
            isDisabled={newLeagueName === ""}
            buttonType={"blue"}
          />
        </AddLeagueFlex>
      </SingleAddLeague>
      <SingleAddLeague>
        <AddLeagueText>Join Existing League</AddLeagueText>
        <AddLeagueDescription>
          Join an already existing league using the name of the league!
        </AddLeagueDescription>
        <AddLeagueFlex>
          <TextInput text={leagueName} setText={setLeagueName} />
          <Button
            text={"Join"}
            onClick={onSubmitExisting}
            isDisabled={leagueName === ""}
            buttonType={"blue"}
          />
        </AddLeagueFlex>
      </SingleAddLeague>
    </AddLeagueFlex>
  );
};
