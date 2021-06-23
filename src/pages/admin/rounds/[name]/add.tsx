import React from "react";
import router from "next/router";
import { AddKnockoutMatchPage } from "templates";

const Add = () => {
  const { name }: { name?: string } = router.query;

  return name ? <AddKnockoutMatchPage roundName={name} id={null} /> : null;
};

export default Add;
