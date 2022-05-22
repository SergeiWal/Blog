import { Button, styled } from "@mui/material";

export const BaseButton = styled(Button)(() => ({
  minWidth: "120px",
  color: "white",
  background: "#51ACAE",

  "&:hover": {
    background: "#51ACAE",
    opacity: "0.7",
  },
  "&.Mui-disabled": {
    backgroundColor: "#E0E2EB",
    color: "#5B5F70",
    opacity: "0.7",
  },
}));
