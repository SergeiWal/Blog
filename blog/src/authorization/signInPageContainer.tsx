import { useAppDispatch } from "../store/store";
import { getCurrentUserAction } from "./actions/authorizeActions";
import SignInPage from "./signInPage";

export default function SignInPageContainer() {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(getCurrentUserAction("1"));
  };

  return <SignInPage clickHandler={clickHandler} />;
}
