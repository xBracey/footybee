import Router from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { types } from "redux/reducers";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.auth.AUTH_RESET_AUTH });
    Router.push("/login");
  }, []);

  return <div />;
};

export default Logout;
