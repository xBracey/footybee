import { Button, TeamEditCard } from "components";
import { ITeamReducer } from "components/EditCard/TeamEditCard/TeamReducer";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editTeam,
  getTeam,
  removeTeam,
  saveTeam,
  getGroups,
} from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "templates";
import { colours } from "theme";
import { AddPageContainer } from "../styles";

interface IAddTeamPage {
  name: string;
}

export const AddTeamPage = ({ name }: IAddTeamPage) => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (name) dispatch(getTeam(name));
    dispatch(getGroups());
  }, []);

  const teams = useSelector((state: IRootState) => state.teams);
  const team = name
    ? teams.teams.find(singleTeam => singleTeam.name === name)
    : { groupLetter: "", name: "" };
  const groups = useSelector((state: IRootState) => state.groups);
  const groupLetters = groups.groups.map(group => group.letter);

  const onSave = async (team: ITeamReducer) => {
    const { data } = name
      ? await dispatch(editTeam(name, team))
      : await dispatch(saveTeam(team));

    if (!data?.error) {
      router.push("/admin/teams");
    }
  };

  const onDelete = () => {
    dispatch(removeTeam(name)).then(({ data }) => {
      if (!data?.error) {
        router.push("/admin/teams");
      }
    });
  };

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
