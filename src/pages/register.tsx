import React, { useEffect, useState } from "react";
import { RegisterPage } from "templates";
import { loginData } from "data";
import { AppDispatch } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
// import { tryRegisterUser } from "redux/actions";
import { IRootState, types } from "redux/reducers";
import Router from "next/router";
import { tryRegisterUser } from "redux/actions";

const Register = () => {
  const { sidebarInfo, sidebarMenu } = loginData;

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
    <RegisterPage
      username={username}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      sidebarInfo={sidebarInfo}
      sidebarMenu={sidebarMenu}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
