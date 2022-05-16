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
}));

export const BlogLogo = styled(Typography)(() => ({
  textAlign: "center",
  fontSize: "32px",
  color: "#000",
}));

export const ErrorMessage = styled("div")(() => ({
  color: "red",
}));
