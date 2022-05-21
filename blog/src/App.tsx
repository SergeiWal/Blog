import { Alert, Snackbar } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signOutAction } from "./authorization/actions/authorizeActions";
import Header from "./header/header";
import { WSServerMessage } from "./interfaces";
import { AppAlert } from "./shared/alert/styled";
import { AppLink } from "./shared/link/styled";
import { useAppDispatch, useAppSelector } from "./store/store";

type AppPropsType = {
  children: any;
  lastWsMessage: WSServerMessage;
};

function App({ children, lastWsMessage }: AppPropsType) {
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const {
    token,
    user: { roles, name: username },
  } = useAppSelector((state) => state);
  const history = useHistory();

  const signOutHandler = () => {
    dispatch(signOutAction());
    history.push("/login");
  };

  const actionBtnClickHandler = () => {
    const path = roles.includes("ADMIN") ? "/dashboard" : "/create";
    history.push(path);
  };

  const handleCloseAlert = () => {
    setAlertIsOpen(false);
  };

  useEffect(() => {
    setAlertIsOpen(true);
  }, [lastWsMessage]);

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
      <Snackbar
        open={alertIsOpen}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <AppAlert icon={false} onClose={handleCloseAlert}>
          {lastWsMessage.message}
          {lastWsMessage.attachment && (
            <AppLink to={lastWsMessage.attachment}>
              {lastWsMessage.attachment}
            </AppLink>
          )}
        </AppAlert>
      </Snackbar>
    </Fragment>
  );
}

export default App;
