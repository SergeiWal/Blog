import { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signOutAction } from "./authorization/actions/authorizeActions";
import Header from "./header/header";
import { useAppDispatch, useAppSelector } from "./store/store";

type AppPropsType = {
  children: any;
};

function App({ children }: AppPropsType) {
  const dispatch = useAppDispatch();
  const {
    token,
    user: { roles, name: username },
  } = useAppSelector((state) => state);
  const history = useHistory();

  const socket = new WebSocket("ws://localhost:3026/");

  socket.onopen = () => {
    console.log("Socket opened");
    socket.send("Hello");
  };

  socket.onerror = (error) => {
    console.log("Error:", error);
  };

  socket.onmessage = (event) => {
    console.log(event.data);
  };

  const signOutHandler = () => {
    dispatch(signOutAction());
    history.push("/login");
  };

  const actionBtnClickHandler = () => {
    const path = roles.includes("ADMIN") ? "/dashboard" : "/create";
    history.push(path);
  };

  return (
    <Fragment>
      {token && (
        <Header
          username={username}
          signOutHandler={signOutHandler}
          actionBtnClickHandler={actionBtnClickHandler}
          actionBtnMsg={
            roles.includes("ADMIN") ? "ADMIN DASHBOARD" : "CREATE POST"
          }
        />
      )}
      <div className="App">{children}</div>
    </Fragment>
  );
}

export default App;
