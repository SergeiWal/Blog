import { useAppDispatch } from "../store/store";
import { signInAction } from "./actions/authorizeActions";
import SignInPage from "./signInPage";

export default function SignInPageContainer() {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(signInAction());
  };

  return <SignInPage clickHandler={clickHandler} />;
}
