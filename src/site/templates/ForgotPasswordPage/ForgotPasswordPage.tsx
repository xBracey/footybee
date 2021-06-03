import { ForgotPasswordCard } from "components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "redux/actions";
import { LoggedOutPage } from "../LoggedOutPage";
import { types } from "redux/reducers";
import Router from "next/router";
import { AppDispatch } from "redux/store";

export const ForgotPasswordPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const [email, setEmail] = useState("");

  const onSubmit = () => {
    dispatch(forgotPassword(email)).then(() => {
      setTimeout(() => {
        dispatch({ type: types.message.MESSAGE_RESET_MESSAGE });
        Router.push("/");
      }, 2000);
    });
  };

  return (
    <LoggedOutPage>
      <ForgotPasswordCard
        email={email}
        setEmail={setEmail}
        onSubmit={onSubmit}
      />
    </LoggedOutPage>
  );
};
