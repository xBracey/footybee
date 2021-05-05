import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "../../Page";
import { AdminTable, Button } from "components";
import { PlayersPageContainer } from "./PlayersPage.styled";
import { colours } from "theme";
import { AddButtonContainer } from "../styles";
import Link from "next/link";

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
              Header: "Player Name",
              accessor: "name",
            },
            {
              Header: "Team Name",
              accessor: "teamName",
            },
          ]}
          url={"/admin/players"}
          primaryKey="name"
        />
        <AddButtonContainer>
          <Link href={`/admin/players/add`}>
            <Button text="Add Player" onClick={() => {}} buttonType={"blue"} />
          </Link>
        </AddButtonContainer>
      </PlayersPageContainer>
    </Page>
  );
};
