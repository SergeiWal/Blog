import {
  Box,
  Button,
  Container,
  styled,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

export const DashboardContainer = styled(Box)(() => ({
  marginTop: 80,
  width: "100%",
}));

export const DashboardTagContainer = styled(Container)(() => ({
  marginTop: 10,
  backgroundColor: "white",
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 600,
  padding: "20px 5px 30px",
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

export const CardContainer = styled(Container)(() => ({
  display: "flex",
}));

export const CardInfoContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const UserInfoContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  color: "black",
  backgroundColor: "transparent",
  textDecoration: "none",
}));

export const UserInfoLabel = styled(Typography)(() => ({
  color: "#5F626D",
  fontWeight: "bold",
}));

export const UserInfoBtnContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-end",
  padding: "0 0",
}));

export const ActionBtn = styled(Button)(() => ({
  backgroundColor: "#E0E2EB",
  color: "#5B5F70",
  margin: "10px 0",
  width: 120,

  "&:hover": {
    backgroundColor: "#E0E2EB",
    color: "#5B5F70",
    opacity: "0.7",
  },

  "&:active": {
    backgroundColor: "#51ACAE",
    color: "white",
    opacity: "1",
  },
}));

export const CardImg = styled("img")(() => ({
  width: "200px",
  height: "150px",
  objectFit: "cover",
}));
