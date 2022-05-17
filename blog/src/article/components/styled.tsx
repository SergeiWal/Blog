import { Button, Card, Container, styled } from "@mui/material";

export const ArticlePageContainer = styled(Container)(() => ({
  marginTop: 80,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "18px",
  color: "#5F626D",
}));

export const CommentCard = styled(Card)(() => ({ minHeight: 120 }));

export const WriteCommentField = styled("textarea")(() => ({
  width: "500px",
  height: "250px",
  fontSize: "18px",
  resize: "none",
  padding: "10px 7px",
  color: "#5F626D",
  border: "1px solid #5F626D",
  outlineColor: "#51ACAE",
}));

export const WriteCommentBtn = styled(Button)(() => ({
  minWidth: "120px",
  color: "#5B5F70",
  background: "#E0E2EB",

  "&:hover": {
    background: "#E0E2EB",
    opacity: "0.7",
  },
}));
