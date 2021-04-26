import { GroupEditCard } from "components";
import React from "react";
import { Page } from "templates";
import { colours } from "theme";
import { AddPageContainer } from "../styles";

interface IAddGroupPage {
  letter: string;
}

export const AddGroupPage = ({ letter }: IAddGroupPage) => {
  const onSave = () => {};

  const onDelete = () => {};

  return (
    <Page
      title="Add Group"
      isLoggedIn={true}
      adminPages
      backgroundColour={colours.green200}
    >
      <AddPageContainer>
        <GroupEditCard
          group={{ letter }}
          onSave={onSave}
          onDelete={onDelete}
          isEdit={!!letter}
        />
      </AddPageContainer>
    </Page>
  );
};
