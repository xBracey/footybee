import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LoggedOutPage } from "../LoggedOutPage";
import { AppDispatch } from "redux/store";
import { VerifyCard } from "components";
import { verifyUser } from "src/site/redux/actions/user";
import Router from "next/router";
import { types } from "redux/reducers";

interface IVerifyPage {
  token: string;
}

export const VerifyPage = ({ token }: IVerifyPage) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(verifyUser(token)).then(() => {
        setTimeout(() => {
          dispatch({ type: types.message.MESSAGE_RESET_MESSAGE });
          Router.push("/");
        }, 2000);
      });
    }
  }, [token]);

  return (
    <LoggedOutPage>
      <VerifyCard />
    </LoggedOutPage>
  );
};
