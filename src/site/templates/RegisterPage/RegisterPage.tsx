import { RegisterCard } from "components";
import React, { useState } from "react";
import { AppDispatch } from "redux/store";
import { useDispatch } from "react-redux";
import { types } from "redux/reducers";
import Router from "next/router";
import { tryRegisterUser } from "redux/actions";
import { LoggedOutPage } from "../LoggedOutPage";

export const RegisterPage = ({}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch: AppDispatch = useDispatch();

  const onSubmit = () => {
    dispatch(tryRegisterUser(username, password, email)).then(({ data }) => {
      if (!data.error) {
        setTimeout(() => {
          dispatch({ type: types.message.MESSAGE_RESET_MESSAGE });
          Router.push("/");
        }, 2000);
      }
    });
  };

  return (
    <LoggedOutPage>
      <RegisterCard
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        onSubmit={onSubmit}
      />
    </LoggedOutPage>
  );
};
