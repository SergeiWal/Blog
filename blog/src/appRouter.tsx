import App from "./App";
import { useAppSelector } from "./store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticlePageContainer from "./article/containers/articlePageContainer";
import SignInPageContainer from "./authorization/signInPageContainer";
import FeedContainer from "./Feed/feedContainer";

export default function AppRouter() {
  const isAuthorized = useAppSelector((state) => state.isAuthorized);
  return (
    <Router>
      <App>
        <Switch>
          <Route
            exact
            path="/"
            component={isAuthorized ? FeedContainer : SignInPageContainer}
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
