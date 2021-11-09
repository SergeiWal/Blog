import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store, { useAppSelector } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "./components/feed";
import ArticlePageContainer from "./containers/articlePageContainer";
import SignInPage from "./components/signInPage";

function AppRouter() {
  const isAuthorized = useAppSelector((state) => state.isAuthorized);
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={isAuthorized ? Feed : SignInPage} />
          <Route
            path="/articles/:id"
            component={isAuthorized ? ArticlePageContainer : SignInPage}
          />
        </Switch>
      </App>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
