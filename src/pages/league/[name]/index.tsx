import React from "react";
import router from "next/router";
import { LeaguePage } from "templates";

const League = () => {
  const { name }: { name?: string } = router.query;

  return name ? <LeaguePage name={name} /> : null;
};

export default League;
