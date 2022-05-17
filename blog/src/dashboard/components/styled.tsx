import {
  Box,
  Button,
  Container,
  styled,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";

export const DashboardContainer = styled(Box)(() => ({
  marginTop: 80,
  width: "100%",
}));

export const TabPanelContainer = styled(Box)(() => ({
  borderBottom: "1px solid #5F626D",
}));

export const AppTabs = styled(Tabs)(() => ({
  color: "#5F626D",
}));

export const AppTab = styled(Tab)(() => ({
  color: "#5F626D",

  "&.Mui-selected": {
    color: "#51ACAE",
  },
}));

export const TagListContainer = styled(Box)(() => ({
  paddingTop: "10px",
  borderTop: "1px solid #5F626D",
  display: "flex",
  flexWrap: "wrap",
  width: 500,
  marginTop: 20,
}));

export const TagBtn = styled(Button)(() => ({
  color: "white",
  backgroundColor: "#51ACAE",
  margin: "5px 0 0 10px",

  "&:hover": {
    color: "white",
    backgroundColor: "#51ACAE",
    opacity: "0.7",
  },
}));

export const TagSubmitBtn = styled(Button)(() => ({
  color: "white",
  backgroundColor: "#51ACAE",
  width: 120,
  margin: "0 10px",
  padding: "7px",

  "&:hover": {
    color: "white",
    backgroundColor: "#51ACAE",
    opacity: "0.7",
  },
}));

export const TagInput = styled(TextField)(() => ({
  "& input": {
    fontSize: 18,
    padding: "7px",
    color: "#5F626D",
  },

  "& .MuiOutlinedInput-root": {
    color: "#5F626D",
    "&.Mui-focused fieldset": {
      borderColor: "#51ACAE",
    },
  },
}));
