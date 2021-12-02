import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { signInAction } from "./actions/authorizeActions";
import SignInPage from "./signInPage";

export default function SignInPageContainer() {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");

  const clickHandler = () => {
    if (username.length > 0) {
      dispatch(signInAction(username));
    }
  };

  return (
    <SignInPage
      user={username}
      setUser={setUsername}
      clickHandler={clickHandler}
    />
  );
}
