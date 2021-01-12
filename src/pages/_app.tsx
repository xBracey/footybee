import "typeface-poppins";
import "typeface-roboto";
import React, { Fragment } from "react";
import { GlobalStyles } from "theme";
import store, { persistor } from "redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

/* eslint-disable-next-line */
const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        <GlobalStyles />
      </PersistGate>
    </Provider>
  );
};

export default App;
