import App from "./App";
import { useAppSelector } from "./store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticlePageContainer from "./article/containers/articlePageContainer";
import SignInPageContainer from "./authorization/signInPageContainer";
import Feed from "./Feed/Components/feed";
import CreateArticleContainer from "./createArticle/containers/createArticleContainer";

export default function AppRouter() {
  const isAuthorized = useAppSelector((state) => state.isAuthorized);
  return (
    <Router>
      <App>
        <Switch>
          <Route
            exact
            path="/"
            component={isAuthorized ? Feed : SignInPageContainer}
          />
          <Route
            path="/articles/:id"
            component={
              isAuthorized ? ArticlePageContainer : SignInPageContainer
            }
          />
          <Route
            path="/create"
            component={
              isAuthorized ? CreateArticleContainer : SignInPageContainer
            }
          />
        </Switch>
      </App>
    </Router>
  );
}
