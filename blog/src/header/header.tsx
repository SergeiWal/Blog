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
        <Button variant="contained" style={headerButtonStyles} color="inherit">
          <Link to={"/create"}>Create post</Link>
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
