import {
  Button,
  Container,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { FixedSizeList } from "react-window";
import { Tag } from "../../dashboard/types";

export const FeedContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-around",
}));

export const ArticleListStyled = styled(FixedSizeList)(() => ({
  overflow: "hidden",
  marginTop: "120px",

  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export const TagsListContainer = styled(Container)(() => ({
  minWidth: "500px",
  marginTop: "120px",
}));

export const FilterListTitle = styled(Typography)(() => ({
  fontSize: 20,
  fontWeight: "bold",
  color: "#5B5F70",
}));

export const TagItemBtnMixin = (collection: Array<Tag>, item: Tag) => {
  const isActive: boolean = collection.includes(item);
  const color: string = isActive ? "white" : "#5B5F70";
  const backgroundColor: string = isActive ? "#51ACAE" : "#E0E2EB";
  return styled(Button)(() => ({
    backgroundColor,
    color,
    margin: 3,

    "&:hover": {
      backgroundColor,
      color,
      opacity: "0.7",
    },
  }));
};

export const TagListContainer = styled(Container)(() => ({
  paddingRight: 0,
  paddingTop: "10px",
  borderTop: "2px solid #E0E2EB",
  display: "flex",
  flexWrap: "wrap",
}));

export const SearchContainer = styled(Container)(() => ({
  minWidth: "500px",
  marginTop: "30px",
}));

export const SearchInputForm = styled("form")(() => ({
  paddingRight: 0,
  paddingTop: "10px",
  borderTop: "2px solid #E0E2EB",
  display: "flex",
}));

export const SearchInput = styled(TextField)(() => ({
  width: 300,

  "& input": {
    fontSize: 18,
    padding: "7px ",
  },

  "& .MuiOutlinedInput-root": {
    color: "#5B5F70",
    "&.Mui-focused fieldset": {
      borderColor: "#51ACAE",
    },
  },
}));

export const SearchBtn = styled(Button)(() => ({
  backgroundColor: "#E0E2EB",
  color: "#5B5F70",
  margin: "0 10px",
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

export const CardInfoContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  fontSize: "18px",
  marginRight: "20px",
  color: "#5B5F70",
}));

export const CardTypography = styled(Typography)(() => ({
  fontWeight: "normal",
}));

export const CardTitle = styled(Typography)(() => ({
  fontWeight: "bold",

  fontSize: 24,
}));

export const CardImg = styled("img")(() => ({
  width: "200px",
  height: "250px",
  objectFit: "cover",
}));
