import { Button } from "@mui/material";

export type SignInPageProps = {
  clickHandler: () => void;
};

export default function SignInPage({ clickHandler }: SignInPageProps) {
  return (
    <div className="signInForm">
      <Button variant="contained" onClick={clickHandler}>
        SIGN IN
      </Button>
    </div>
  );
}
