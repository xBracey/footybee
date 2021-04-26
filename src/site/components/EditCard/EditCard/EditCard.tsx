import React, { ReactNode } from "react";
import {
  EditCardContainer,
  EditCardMain,
  EditCardButtons,
  EditCardTitle,
} from "./EditCard.styled";
import { Button } from "../../Button";

interface IEditCard {
  children: ReactNode;
  title: string;
  onSave: () => void;
  onDelete: () => void;
  isDisabled: boolean;
  isEdit: boolean;
}

export const EditCard = ({
  children,
  title,
  onSave,
  onDelete,
  isDisabled,
  isEdit,
}: IEditCard) => {
  return (
    <EditCardContainer>
      <EditCardMain>
        <EditCardTitle>{title}</EditCardTitle>
        {children}
      </EditCardMain>
      <EditCardButtons>
        {isEdit ? (
          <Button text="Delete" onClick={onDelete} buttonType="red" />
        ) : null}

        <Button
          text="Save"
          onClick={onSave}
          buttonType="green"
          isDisabled={isDisabled}
        />
      </EditCardButtons>
    </EditCardContainer>
  );
};
