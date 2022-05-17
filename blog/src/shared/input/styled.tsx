import { FormControl, styled, TextField, Typography } from "@mui/material";

export const AuthInput = styled(TextField)(() => ({
  width: "300px",
  margin: "5px 0",

  "& label.Mui-focused": {
    color: "#3A7C7D",
  },

  "& .MuiOutlinedInput-root": {
    color: "#5F626D",
    "&.Mui-focused fieldset": {
      borderColor: "#3A7C7D",
    },
  },
}));

export const AuthLabel = styled(Typography)(() => ({
  color: "#5F626D",
}));

export const AuthFormControl = styled(FormControl)(() => ({
  margin: "5px 0 ",
}));
