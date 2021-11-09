import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import AppRouter from "./appRouter";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
