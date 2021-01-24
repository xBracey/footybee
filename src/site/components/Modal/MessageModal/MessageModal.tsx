import { icons } from "assets";
import React, { useState } from "react";
import { BaseModal } from "../BaseModal";
import {
  MessageModalContainer,
  IconContainer,
  MessageContainer,
  MessageModalOuterContainer,
} from "./MessageModal.styled";

interface IMessageModal {
  open: boolean;
  setOpen: (open: boolean) => void;
  error: boolean;
  message: string;
}

export const MessageModal = ({
  open,
  setOpen,
  error,
  message,
}: IMessageModal) => {
  const iconComponent = error ? <icons.error /> : <icons.success />;

  if (!open) return null;

  return (
    <MessageModalOuterContainer error={error}>
      <BaseModal open={open} setOpen={setOpen}>
        <MessageModalContainer>
          <IconContainer>{iconComponent}</IconContainer>
          <MessageContainer>{message}</MessageContainer>
        </MessageModalContainer>
      </BaseModal>
    </MessageModalOuterContainer>
  );
};
