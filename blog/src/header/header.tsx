import { Button } from "@mui/material";

export type HeaderProps = {
  signOutHandler: () => void;
};

export const headerButtonStyles = { margin: 4 };

export default function Header({ signOutHandler }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo">BLOG</div>
      <div className="headerButtons">
        <Button
          variant="contained"
          style={headerButtonStyles}
          color="inherit"
          onClick={signOutHandler}
        >
          Create post
        </Button>
        <Button
          variant="contained"
          style={headerButtonStyles}
          color="inherit"
          onClick={signOutHandler}
        >
          Sign Out
        </Button>
      </div>
    </header>
  );
}
