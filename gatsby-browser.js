import React, { Fragment } from "react";
import { GlobalStyles } from "theme";

export const wrapRootElement = ({ element }) => {
  return (
    <Fragment>
      {element}
      <GlobalStyles />
    </Fragment>
  );
};
