import React from "react";
import ReactDOM from "react-dom";
import store, { persistor } from "./store/store";
import { Provider } from "react-redux";
import AppRouter from "./appRouter";
import { PersistGate } from "redux-persist/integration/react";
import "./styles/index.css";

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
