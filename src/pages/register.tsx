import React, { useEffect, useState } from "react";
import { RegisterPage } from "templates";
import { loginData } from "data";
import { AppDispatch } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
// import { tryRegisterUser } from "redux/actions";
import { IRootState } from "redux/reducers";
import Router from "next/router";
import { tryRegisterUser } from "redux/actions";

const Register = () => {
  const { sidebarInfo, sidebarMenu } = loginData;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch: AppDispatch = useDispatch();

  const auth = useSelector((state: IRootState) => state.auth);

  const onSubmit = () => {
    dispatch(tryRegisterUser(username, password));
  };

  useEffect(() => {
    if (auth.token) {
      Router.push("/");
    }
  }, [auth.token]);

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
