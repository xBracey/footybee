import React from "react";
import { Page } from "../../Page";
import { GroupsPageContainer } from "./GroupsPage.styled";

export const GroupsPage = () => {
  return (
    <Page title="Groups" isLoggedIn={true} adminPages>
      <GroupsPageContainer>Hello World</GroupsPageContainer>
    </Page>
  );
};
