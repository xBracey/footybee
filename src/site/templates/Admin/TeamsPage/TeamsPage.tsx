import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "../../Page";
import { AdminTable } from "components";
import { TeamsPageContainer } from "./TeamsPage.styled";
import { colours } from "theme";

export const TeamsPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const teams = useSelector((state: IRootState) => state.teams);

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  return (
    <Page
      title="Teams"
      isLoggedIn={true}
      adminPages
      backgroundColour={colours.green200}
    >
      <TeamsPageContainer>
        <AdminTable
          data={teams.teams}
          headers={[
            {
              Header: "Group Letter",
              accessor: "groupLetter",
            },
            {
              Header: "Team Name",
              accessor: "name",
            },
          ]}
          url={"/admin/teams"}
          primaryKey="name"
        />
      </TeamsPageContainer>
    </Page>
  );
};
