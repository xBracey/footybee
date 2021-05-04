import React from "react";
import router from "next/router";
import { AddGroupMatchPage } from "templates";

const Add = () => {
  const { letter }: { letter?: string } = router.query;

  return <AddGroupMatchPage groupLetter={letter} id={null} />;
};

export default Add;
