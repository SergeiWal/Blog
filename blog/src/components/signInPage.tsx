import { Button } from "@mui/material";
import { useAppDispatch } from "../store";
import { getCurrentUserAction } from "../actions/userAction";

export default function SignInPage() {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(getCurrentUserAction(1));
  };

  return (
    <div>
      <Button variant="contained" onClick={clickHandler}>
        SignIn
      </Button>
    </div>
  );
}
