import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroups } from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "../../Page";
import { AdminTable } from "components";
import { GroupsPageContainer } from "./GroupsPage.styled";
import { colours } from "theme";

export const GroupsPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const groups = useSelector((state: IRootState) => state.groups);

  useEffect(() => {
    dispatch(getGroups());
  }, []);

  console.log(groups);

  return (
    <Page
      title="Groups"
      isLoggedIn={true}
      adminPages
      backgroundColour={colours.green200}
    >
      <GroupsPageContainer>
        <AdminTable
          data={groups.groups}
          headers={[
            {
              Header: "Group Letter",
              accessor: "letter",
            },
          ]}
          url={"/admin/groups"}
          primaryKey="letter"
        />
      </GroupsPageContainer>
    </Page>
  );
};
