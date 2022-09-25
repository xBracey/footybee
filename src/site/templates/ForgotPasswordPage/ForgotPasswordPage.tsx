import { ForgotPasswordCard } from "components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "redux/actions";
import { LoggedOutPage } from "../LoggedOutPage";
import { types } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { useRouter } from "next/router";

export const ForgotPasswordPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const [email, setEmail] = useState("");

  const router = useRouter();

  const onSubmit = () => {
    dispatch(forgotPassword(email)).then(() => {
      setTimeout(() => {
        dispatch({ type: types.message.MESSAGE_RESET_MESSAGE });
        router.push("/");
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
