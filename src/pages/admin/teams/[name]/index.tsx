import router from "next/router";
import React from "react";
import { AddTeamPage } from "templates";

const Teams = () => {
  const { name }: { name?: string } = router.query;

  return name ? <AddTeamPage name={name} /> : null;
};

export default Teams;
