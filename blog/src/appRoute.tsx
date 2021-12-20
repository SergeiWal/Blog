import { Route } from "react-router-dom";
import SignInPageContainer from "./authorization/signInPageContainer";
import { useAppSelector } from "./store/store";

export type RouteProps = {
  exact: boolean;
  path: string;
  element: () => JSX.Element;
};

export default function AppRoute({ element, path, exact }: RouteProps) {
  const { isAuthorized } = useAppSelector((state) => state);

  return exact ? (
    <Route
      exact
      path={path}
      component={isAuthorized ? element : SignInPageContainer}
    />
  ) : (
    <Route
      path={path}
      component={isAuthorized ? element : SignInPageContainer}
    />
  );
}
