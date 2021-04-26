import router from "next/router";
import React from "react";
import { AddGroupPage } from "templates";

const Groups = () => {
  const { letter }: { letter?: string } = router.query;

  return letter ? <AddGroupPage letter={letter} /> : null;
};

export default Groups;
