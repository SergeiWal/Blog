import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export type HeaderProps = {
  signOutHandler: () => void;
};

export const headerButtonStyles = { margin: 4 };

export default function Header({ signOutHandler }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>BLOG</Link>
      </div>
      <div className="headerButtons">
        <Link to={"/create"}>
          <Button
            variant="contained"
            style={headerButtonStyles}
            color="inherit"
          >
            Create post
          </Button>
        </Link>
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
