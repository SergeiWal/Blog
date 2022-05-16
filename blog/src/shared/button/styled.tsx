import { Button, styled } from "@mui/material";

export const BaseButton = styled(Button)(() => ({
  minWidth: "120px",
  color: "white",
  background: "#51ACAE",

  "&:hover": {
    background: "#51ACAE",
    opacity: "0.7",
  },
}));
