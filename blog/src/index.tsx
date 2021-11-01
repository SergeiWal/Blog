import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "./components/feed";
import ArticlePage from "./components/articlePage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/articles/:id" component={ArticlePage} />
          </Switch>
        </App>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
