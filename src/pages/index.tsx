import { useLoggedIn } from "lib";
import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "redux/reducers";

const Home = () => {
  const user = useSelector((state: IRootState) => state.user);
  useLoggedIn();

  return <div>{`Hello ${user.username}`}</div>;
};

export default Home;
