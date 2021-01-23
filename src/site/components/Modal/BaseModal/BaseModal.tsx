import React, { ReactNode } from "react";
import {
  BaseModalContainer,
  BaseModalInnerContainer,
} from "./BaseModal.styled";

interface IBaseModal {
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const BaseModal = ({ children, open, setOpen }: IBaseModal) => {
  const onClose = () => setOpen(false);

  return open ? (
    <BaseModalContainer onClick={onClose}>
      <BaseModalInnerContainer>{children}</BaseModalInnerContainer>
    </BaseModalContainer>
  ) : null;
};
