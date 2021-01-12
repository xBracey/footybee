import React, { useEffect, useState } from "react";
import { LoginPage } from "templates";
import { loginData } from "data";
import { AppDispatch } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { tryLoginUser } from "redux/actions";
import { IRootState } from "redux/reducers";
import Router from "next/router";

const Login = () => {
  const { sidebarInfo, sidebarMenu } = loginData;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch: AppDispatch = useDispatch();

  const auth = useSelector((state: IRootState) => state.auth);

  const onSubmit = () => {
    dispatch(tryLoginUser(username, password));
  };

  useEffect(() => {
    if (auth.token) {
      Router.push("/");
    }
  }, [auth.token]);

  return (
    <LoginPage
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      sidebarInfo={sidebarInfo}
      sidebarMenu={sidebarMenu}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
