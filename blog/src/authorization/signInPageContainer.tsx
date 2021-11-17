import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { signInAction } from "./actions/authorizeActions";
import SignInPage from "./signInPage";

export default function SignInPageContainer() {
  const dispatch = useAppDispatch();
  const [id, setId] = useState("");

  const clickHandler = () => {
    if (id.length > 0 && Number.parseInt(id)) {
      dispatch(signInAction(id));
    }
  };

  return <SignInPage user={id} setUser={setId} clickHandler={clickHandler} />;
}
