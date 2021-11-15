import { Fragment } from "react";
import { signOutAction } from "./authorization/actions/authorizeActions";
import Header from "./header/header";
import { useAppDispatch, useAppSelector } from "./store/store";

type AppPropsType = {
  children: any;
};

function App({ children }: AppPropsType) {
  console.log(process.env);
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector((state) => state.isAuthorized);

  const signOutHandler = () => {
    dispatch(signOutAction());
  };

  return (
    <Fragment>
      {isAuthorized && <Header signOutHandler={signOutHandler} />}
      <div className="App">{children}</div>
    </Fragment>
  );
}

export default App;
