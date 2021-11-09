import { useAppDispatch } from "../store";
import { getCurrentUserAction } from "../actions/userAction";
import SignInPage from "../components/signInPage";

export default function SignInPageContainer() {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(getCurrentUserAction(1));
  };

  return <SignInPage clickHandler={clickHandler} />;
}
