import React from "react";
import router from "next/router";
import { AddGroupMatchPage } from "templates";

const GroupMatch = () => {
  const { letter, id }: { letter?: string; id?: string } = router.query;

  return letter && id ? (
    <AddGroupMatchPage groupLetter={letter} id={id} />
  ) : null;
};

export default GroupMatch;
