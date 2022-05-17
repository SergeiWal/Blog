import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticlePageContainer from "./article/containers/articlePageContainer";
import Feed from "./Feed/components/feed";
import CreateArticleContainer from "./createArticle/containers/createArticleContainer";
import DashboardContainer from "./dashboard/containers/dashboardContainer";
import SignUpContainer from "./authorization/signUpContainer";
import AppRoute from "./appRoute";
import SignInPageContainer from "./authorization/signInPageContainer";
import FeedContainer from "./Feed/containers/feedContainer";

export default function AppRouter() {
  return (
    <Router>
      <App>
        <Switch>
          <AppRoute exact={true} path="/" element={FeedContainer} />
          <Route path="/login" component={SignInPageContainer} />
          <Route path="/sign-up" component={SignUpContainer} />
          <AppRoute
            exact={false}
            path="/articles/:id"
            element={ArticlePageContainer}
          />
          <AppRoute
            exact={false}
            path="/create"
            element={CreateArticleContainer}
          />
          <AppRoute
            exact={false}
            path="/dashboard"
            element={DashboardContainer}
          />
        </Switch>
      </App>
    </Router>
  );
}
