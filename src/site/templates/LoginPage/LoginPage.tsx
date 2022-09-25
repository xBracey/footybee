import React, { useEffect, useState } from "react";
import { LoginCard } from "components";
import { AppDispatch } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { tryLoginUser } from "redux/actions";
import { IRootState } from "redux/reducers";
import { useRouter } from "next/router";
import { LoggedOutPage } from "../LoggedOutPage";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch: AppDispatch = useDispatch();

  const auth = useSelector((state: IRootState) => state.auth);

  const router = useRouter();

  const onSubmit = () => {
    dispatch(tryLoginUser(username, password));
  };

  useEffect(() => {
    if (auth.token) {
      router.push("/");
    }
  }, [auth.token]);

  return (
    <LoggedOutPage>
      <LoginCard
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        onSubmit={onSubmit}
      />
    </LoggedOutPage>
  );
};
