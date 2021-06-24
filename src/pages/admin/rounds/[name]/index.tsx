import React from "react";
import router from "next/router";
import { AddRoundPage } from "templates";

const Rounds = () => {
  const { name }: { name?: string } = router.query;

  return name ? <AddRoundPage name={name} /> : null;
};

export default Rounds;
