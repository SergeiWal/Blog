import { Container, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const AuthPageContainer = styled(Container)(() => ({
  marginTop: "5%",
}));

export const AuthFormContainer = styled(Container)(() => ({
  background: "white",
  borderRadius: "20px",
  width: "400px",
  padding: "45px 0 15px 0",
  marginTop: "20px",

  "& form": {
    display: "flex",
    flexDirection: "Column",
    alignItems: "center",
  },
}));

export const AuthFormFooter = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "15px 0",
  alignItems: "center",
}));

export const SignUpLink = styled(Link)(() => ({
  fontSize: "14px",
  color: "#51ACAE",
  marginTop: "5px",
  textDecoration: "none",
}));

export const BlogLogo = styled(Typography)(() => ({
  color: "#5F626D",
  textDecoration: "none",
  fontSize: 32,
  marginRight: "15px",
  alignSelf: "self",
  textAlign: "center",
}));

export const ErrorMessage = styled("div")(() => ({
  color: "red",
}));
