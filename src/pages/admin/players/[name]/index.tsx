import router from "next/router";
import React from "react";
import { AddPlayerPage } from "templates";

const Players = () => {
  const { name }: { name?: string } = router.query;

  return name ? <AddPlayerPage name={name} /> : null;
};

export default Players;
