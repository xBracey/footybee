import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { types } from "redux/reducers";

const Logout = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    dispatch({ type: types.auth.AUTH_RESET_AUTH });
    router.push("/login");
  }, []);

  return <div />;
};

export default Logout;
