import { createStore, applyMiddleware, Store, Action } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import getConfig from "next/config";
import reducers, { IRootState } from "./reducers";
import { ThunkNewDispatch } from "./types";

const { publicRuntimeConfig } = getConfig();

const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["auth"], // which reducer want to store
};

const persistedReducer = persistReducer(persistConfig, reducers);

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  const { NODE_ENV } = publicRuntimeConfig;

  if (NODE_ENV === "development") {
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept("./reducers", () => {
        /* eslint-disable-next-line */
        const nextReducer = require("./reducers/index").default;

        store.replaceReducer(nextReducer);
      });
    }
  }

  return store;
};

const store: Store<IRootState, Action<IRootState>> & {
  dispatch: ThunkNewDispatch;
} = configureStore();

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
