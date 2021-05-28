import { Button, TextInput } from "components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewLeague, addUserLeague } from "redux/actions";
import { AddLeagueFlex, AddLeagueText } from "../HomePage.styled";

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
      <div>
        <AddLeagueText>Add New League</AddLeagueText>
        <AddLeagueFlex>
          <TextInput text={newLeagueName} setText={setNewLeagueName} />
          <Button
            text={"Add"}
            onClick={onSubmitNew}
            isDisabled={newLeagueName === ""}
            buttonType={"blue"}
          />
        </AddLeagueFlex>
      </div>
      <div>
        <AddLeagueText>Add Existing League</AddLeagueText>
        <AddLeagueFlex>
          <TextInput text={leagueName} setText={setLeagueName} />
          <Button
            text={"Add"}
            onClick={onSubmitExisting}
            isDisabled={leagueName === ""}
            buttonType={"blue"}
          />
        </AddLeagueFlex>
      </div>
    </AddLeagueFlex>
  );
};
