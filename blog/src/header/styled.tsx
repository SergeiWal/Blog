import { Avatar, Button, IconButton, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const AppHeader = styled("header")(() => ({
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 5px",
}));

export const AppLogo = styled(Link)(() => ({
  color: "#5F626D",
  textDecoration: "none",
  fontSize: 32,
  marginLeft: "10%",
  alignSelf: "self",
  textAlign: "right",

  "$:visited": {
    color: "#5F626D",
  },
  "$:hover": {
    color: "#5F626D",
  },
}));

export const MainLetters = styled("span")(() => ({
  color: "#51ACAE",
}));

export const AppIconButton = styled(IconButton)(() => ({
  width: "40px",
  height: "40px",
  margin: "0 10px",
}));

export const CreateLinkButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: "#51ACAE",
  width: "200px",

  "&: hover": {
    backgroundColor: "#51ACAE",
    opacity: "0.7",
  },
}));

export const AppUserInfo = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "15px",
}));

export const AppUsername = styled(Typography)(() => ({
  margin: "0 10px",
  color: "#5B5F70",
  fontWeight: "bold",
}));

export const AppAvater = styled(Avatar)(() => ({
  backgroundColor: "white",
  color: "#5F626D",
}));
