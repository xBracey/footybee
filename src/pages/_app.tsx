import "typeface-poppins";
import "typeface-roboto";
import React, { Fragment } from "react";
import { GlobalStyles } from "theme";

/* eslint-disable-next-line */
const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
      <GlobalStyles />
    </Fragment>
  );
};

export default App;
