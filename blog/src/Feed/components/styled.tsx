import { Button, Container, styled, Typography } from "@mui/material";
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
