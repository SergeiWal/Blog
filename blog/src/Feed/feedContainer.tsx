import { signOutAction } from "../authorization/actions/authorizeActions";
import { useAppDispatch } from "../store/store";
import Feed from "./Components/feed";

export default function FeedContainer() {
  const dispatch = useAppDispatch();

  const signOutHandler = () => {
    dispatch(signOutAction());
  };

  return <Feed signOutHandler={signOutHandler} />;
}
