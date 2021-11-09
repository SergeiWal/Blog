import "./index.css";
import App from "./App";
import { useAppSelector } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticlePageContainer from "./containers/articlePageContainer";
import SignInPageContainer from "./containers/signInPageContainer";
import FeedConteiner from "./containers/feedContainer";

export default function AppRouter() {
  const isAuthorized = useAppSelector((state) => state.isAuthorized);
  return (
    <Router>
      <App>
        <Switch>
          <Route
            exact
            path="/"
            component={isAuthorized ? FeedConteiner : SignInPageContainer}
          />
          <Route
            path="/articles/:id"
            component={
              isAuthorized ? ArticlePageContainer : SignInPageContainer
            }
          />
        </Switch>
      </App>
    </Router>
  );
}
