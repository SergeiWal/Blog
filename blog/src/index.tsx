import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import AppRouter from "./appRouter";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
