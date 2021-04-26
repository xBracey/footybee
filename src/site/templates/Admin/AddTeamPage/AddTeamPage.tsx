import { TeamEditCard } from "components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeam } from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { getGroups } from "src/site/redux/actions/groups";
import { Page } from "templates";
import { colours } from "theme";
import { AddPageContainer } from "../styles";

interface IAddTeamPage {
  name: string;
}

export const AddTeamPage = ({ name }: IAddTeamPage) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (name) dispatch(getTeam(name));
    dispatch(getGroups());
  }, []);

  const teams = useSelector((state: IRootState) => state.teams);
  const team = name
    ? teams.teams.find(singleTeam => singleTeam.name === name)
    : { groupLetter: null, name: null };
  const groups = useSelector((state: IRootState) => state.groups);
  const groupLetters = groups.groups.map(group => group.letter);

  const onSave = () => {};

  const onDelete = () => {};

  console.log("====================================");
  console.log(team);
  console.log("====================================");

  return (
    <Page
      title="Add Team"
      isLoggedIn={true}
      adminPages
      backgroundColour={colours.green200}
    >
      <AddPageContainer>
        {team && groupLetters.length ? (
          <TeamEditCard
            groupLetters={groupLetters}
            team={team}
            onSave={onSave}
            onDelete={onDelete}
            isEdit={!!name}
          />
        ) : null}
      </AddPageContainer>
    </Page>
  );
};
