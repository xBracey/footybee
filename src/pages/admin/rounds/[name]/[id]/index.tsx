import React from "react";
import router from "next/router";
import { AddKnockoutMatchPage } from "templates";

const KnockoutMatch = () => {
  const { name, id }: { name?: string; id?: string } = router.query;

  return name && id ? <AddKnockoutMatchPage roundName={name} id={id} /> : null;
};

export default KnockoutMatch;
