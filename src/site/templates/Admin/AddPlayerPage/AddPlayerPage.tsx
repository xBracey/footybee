import { Button, PlayerEditCard } from "components";
import { IPlayerReducer } from "components/EditCard/PlayerEditCard/PlayerReducer";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { editPlayer, getPlayer, removePlayer, savePlayer } from "redux/actions";
import {
  editPlayer,
  getPlayer,
  getTeams,
  removePlayer,
  savePlayer,
} from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "templates";
import { colours } from "theme";
import { AddButtonContainer, AddPageContainer } from "../styles";

interface IAddPlayerPage {
  name: string;
}

export const AddPlayerPage = ({ name }: IAddPlayerPage) => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (name) dispatch(getPlayer(name));
    dispatch(getTeams());
  }, []);

  const players = useSelector((state: IRootState) => state.players);
  const player = name
    ? players.players.find(singlePlayer => singlePlayer.name === name)
    : { name: "", teamName: "", goals: 0 };
  const teams = useSelector((state: IRootState) => state.teams);
  const teamNames = teams.teams.map(group => group.name);

  const onSave = async (player: IPlayerReducer) => {
    const { data } = name
      ? await dispatch(editPlayer(name, player))
      : await dispatch(savePlayer(player));
    if (!data?.error) {
      router.push("/admin/players");
    }
  };

  const onDelete = () => {
    dispatch(removePlayer(name)).then(({ data }) => {
      if (!data?.error) {
        router.push("/admin/players");
      }
    });
  };

  return (
    <Page
      title="Add Player"
      isLoggedIn={true}
      adminPages
      backgroundColour={colours.green200}
    >
      <AddPageContainer>
        {player && teamNames.length ? (
          <PlayerEditCard
            teamNames={teamNames}
            player={{ ...player, goals: player.goals.toString() }}
            onSave={onSave}
            onDelete={onDelete}
            isEdit={!!name}
          />
        ) : null}
      </AddPageContainer>
    </Page>
  );
};
