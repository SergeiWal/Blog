import { Container, styled } from "@mui/material";
import { FixedSizeList } from "react-window";

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
