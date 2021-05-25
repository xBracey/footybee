import { Button, TextInput } from "components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddLeagueFlex, AddLeagueText } from "../HomePage.styled";

export const AddLeague = () => {
  const dispatch = useDispatch();

  const [leagueName, setLeagueName] = useState("");

  const onSubmit = () => {
    if (leagueName !== "") {
      // dispatch(addLeague(leagueName))
    }
  };

  return (
    <AddLeagueFlex>
      <AddLeagueText>Add League</AddLeagueText>
      <TextInput text={leagueName} setText={setLeagueName} />
      <Button
        text={"Add League"}
        onClick={onSubmit}
        isDisabled={leagueName === ""}
        buttonType={"blue"}
      />
    </AddLeagueFlex>
  );
};
