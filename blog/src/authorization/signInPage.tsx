import { Button } from "@mui/material";

export type SignInPageProps = {
  clickHandler: () => void;
};

export default function SignInPage({ clickHandler }: SignInPageProps) {
  return (
    <div>
      <Button variant="contained" onClick={clickHandler}>
        SignIn
      </Button>
    </div>
  );
}
