import { Button, TeamEditCard } from "components";
import { GroupPlayerAddCard } from "components/EditCard/GroupPlayerAddCard";
import { ITeamReducer } from "components/EditCard/TeamEditCard/TeamReducer";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editTeam,
  getTeam,
  removeTeam,
  saveTeam,
  getGroups,
  savePlayers,
  getRounds,
  getPlayers,
} from "redux/actions";
import { IRootState, types } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "templates";
import { colours } from "theme";
import { AddPageContainer } from "../styles";
import { AddTeamFlex } from "./AddTeamPage.styled";

interface IAddTeamPage {
  name: string;
}

export const AddTeamPage = ({ name }: IAddTeamPage) => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (name) dispatch(getTeam(name));
    dispatch(getGroups());
    dispatch(getRounds());
    dispatch(getPlayers());
  }, []);

  const teams = useSelector((state: IRootState) => state.teams);
  const team = name
    ? teams.teams.find(singleTeam => singleTeam.name === name)
    : { groupLetter: "", name: "", groupPosition: "", roundName: "" };

  const groups = useSelector((state: IRootState) => state.groups);
  const groupLetters = groups.groups.map(group => group.letter);

  const rounds = useSelector((state: IRootState) => state.rounds);
  const roundNames = rounds.rounds.map(round => round.name);

  const players = useSelector((state: IRootState) => state.players);
  const teamPlayers = players.players.filter(
    player => player.teamName === name
  );

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

  const onPlayersSave = (playerNames: string[]) => {
    dispatch(savePlayers(team.name, playerNames)).then(({ data }) => {
      if (!data?.error) {
        dispatch({
          type: types.message.MESSAGE_SET_MESSAGE,
          data: { message: "Successfully added players" },
        });
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
        {groupLetters.length ? (
          <AddTeamFlex>
            <TeamEditCard
              groupLetters={groupLetters}
              team={{
                ...team,
                roundName: team.roundName
                  ? {
                      value: team.roundName,
                      label: team.roundName,
                    }
                  : null,
              }}
              onSave={onSave}
              onDelete={onDelete}
              isEdit={!!name}
              roundNames={roundNames}
            />
            <GroupPlayerAddCard
              onSave={onPlayersSave}
              teamPlayers={teamPlayers}
            />
          </AddTeamFlex>
        ) : null}
      </AddPageContainer>
    </Page>
  );
};
