import React from "react";
import { Helmet } from "react-helmet";

export default ({ title }) => (
  <Helmet>
    <title>{title}</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://fonts.googleapis.com/css2?family=Roboto"
    />
  </Helmet>
);
