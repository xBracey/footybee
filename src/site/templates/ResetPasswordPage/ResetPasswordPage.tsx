import { ChangePasswordCard } from "components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "redux/actions";
import { LoggedOutPage } from "../LoggedOutPage";
import { types } from "redux/reducers";
import { useRouter } from "next/router";
import { AppDispatch } from "redux/store";

interface IResetPasswordPage {
  token: string;
}

export const ResetPasswordPage = ({ token }: IResetPasswordPage) => {
  const dispatch: AppDispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const onSubmit = () => {
    dispatch(changePassword(token, password)).then(() => {
      setTimeout(() => {
        dispatch({ type: types.message.MESSAGE_RESET_MESSAGE });
        router.push("/");
      }, 2000);
    });
  };

  return (
    <LoggedOutPage>
      <ChangePasswordCard
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        onSubmit={onSubmit}
      />
    </LoggedOutPage>
  );
};
