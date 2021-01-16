import React from "react";
import { useSelector } from "react-redux";
import { HomePage } from "templates";
import { IRootState } from "redux/reducers";

const Home = () => {
  const user = useSelector((state: IRootState) => state.user);

  return <HomePage username={user.username} />;
};

export default Home;
