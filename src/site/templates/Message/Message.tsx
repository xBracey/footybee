import { MessageModal } from "components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState, types } from "redux/reducers";
import { AppDispatch } from "redux/store";

export const Message = () => {
  const dispatch: AppDispatch = useDispatch();
  const message = useSelector((state: IRootState) => state.message);

  const setOpen = () => {
    dispatch({
      type: types.message.MESSAGE_RESET_MESSAGE,
    });
  };

  return (
    <MessageModal
      open={!!message.message}
      setOpen={setOpen}
      message={message.message}
      error={message.error}
    />
  );
};
