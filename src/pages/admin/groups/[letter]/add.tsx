import React from "react";
import router from "next/router";
import { AddGroupMatchPage } from "templates";

const Add = () => {
  const { letter }: { letter?: string } = router.query;

  return letter ? <AddGroupMatchPage groupLetter={letter} id={null} /> : null;
};

export default Add;
