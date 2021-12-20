import App from "./App";
import { useAppSelector } from "./store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticlePageContainer from "./article/containers/articlePageContainer";
import Feed from "./Feed/components/feed";
import CreateArticleContainer from "./createArticle/containers/createArticleContainer";
import DashboardContainer from "./dashboard/containers/dashboardContainer";
import SignUpContainer from "./authorization/signUpContainer";
import AppRoute from "./appRoute";

export default function AppRouter() {
  const { isAuthorized, signUp } = useAppSelector((state) => state);
  return (
    <Router>
      <App>
        <Switch>
          <AppRoute exact={true} path="/" element={Feed} />
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
