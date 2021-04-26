import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroups } from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "../../Page";
import { AdminTable, Button } from "components";
import { AddButtonContainer, PageContainer } from "../styles";
import { colours } from "theme";
import Link from "next/link";

export const GroupsPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const groups = useSelector((state: IRootState) => state.groups);

  useEffect(() => {
    dispatch(getGroups());
  }, []);

  return (
    <Page
      title="Groups"
      isLoggedIn={true}
      adminPages
      backgroundColour={colours.green200}
    >
      <PageContainer>
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
        <AddButtonContainer>
          <Link href="/admin/groups/add">
            <Button text="Add Group" onClick={() => {}} buttonType={"blue"} />
          </Link>
        </AddButtonContainer>
      </PageContainer>
    </Page>
  );
};
