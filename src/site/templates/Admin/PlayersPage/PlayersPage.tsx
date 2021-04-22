import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "../../Page";
import { AdminTable } from "components";
import { PlayersPageContainer } from "./PlayersPage.styled";
import { colours } from "theme";

export const PlayersPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const players = useSelector((state: IRootState) => state.players);

  useEffect(() => {
    dispatch(getPlayers());
  }, []);

  return (
    <Page
      title="Players"
      isLoggedIn={true}
      adminPages
      backgroundColour={colours.green200}
    >
      <PlayersPageContainer>
        <AdminTable
          data={players.players}
          headers={[
            {
              Header: "Team Name",
              accessor: "teamName",
            },
            {
              Header: "Player Name",
              accessor: "name",
            },
          ]}
          url={"/admin/players"}
          primaryKey="name"
        />
      </PlayersPageContainer>
    </Page>
  );
};
