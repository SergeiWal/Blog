import { Fragment, useEffect } from "react";
import { signOutAction } from "./authorization/actions/authorizeActions";
import Header from "./header/header";
import { useAppDispatch, useAppSelector } from "./store/store";

type AppPropsType = {
  children: any;
};

function App({ children }: AppPropsType) {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state);

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
  };

  return (
    <Fragment>
      {token && <Header signOutHandler={signOutHandler} />}
      <div className="App">{children}</div>
    </Fragment>
  );
}

export default App;
