import { Avatar, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  AppAvater,
  AppHeader,
  AppIconButton,
  AppLogo,
  AppUserInfo,
  AppUsername,
  CreateLinkButton,
  MainLetters,
} from "./styled";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export type HeaderProps = {
  username: string;
  actionBtnMsg: string;
  actionBtnClickHandler: () => void;
  signOutHandler: () => void;
};

export const headerButtonStyles = { margin: 4 };

export default function Header({
  username,
  actionBtnMsg,
  signOutHandler,
  actionBtnClickHandler,
}: HeaderProps) {
  return (
    <AppHeader>
      <AppUserInfo>
        <AppAvater>
          <AccountCircleOutlinedIcon style={{ width: 35, height: 35 }} />
        </AppAvater>
        <AppUsername>{username}</AppUsername>
      </AppUserInfo>
      <AppLogo to="/">
        <MainLetters>WSA</MainLetters>BLOG
      </AppLogo>
      <div className="headerButtons">
        <CreateLinkButton
          variant="contained"
          style={headerButtonStyles}
          color="inherit"
          onClick={actionBtnClickHandler}
        >
          {actionBtnMsg}
        </CreateLinkButton>

        <AppIconButton aria-label="SignOut" onClick={signOutHandler}>
          <ExitToAppIcon style={{ width: 35, height: 35 }} />
        </AppIconButton>
      </div>
    </AppHeader>
  );
}
