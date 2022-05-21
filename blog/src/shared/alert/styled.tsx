import { Alert, styled } from "@mui/material";

export const AppAlert = styled(Alert)(() => ({
  "&.MuiAlert-root": {
    backgroundColor: "white",
    color: "#51ACAE",
    borderRadius: 5,
    minWidth: 400,
    maxWidth: 500,
    border: "2px solid #51ACAE",
  },
}));
