import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "../../Page";
import { AdminTable, Button } from "components";
import { AddButtonContainer, PageContainer } from "../styles";
import { colours } from "theme";
import Link from "next/link";

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
      <PageContainer>
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
        <AddButtonContainer>
          <Link href="/admin/teams/add">
            <Button text="Add Team" onClick={() => {}} buttonType={"blue"} />
          </Link>
        </AddButtonContainer>
      </PageContainer>
    </Page>
  );
};
