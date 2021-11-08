import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { Button } from "@mui/material";
import { getButtonColorForCollection } from "../services/articles";
import { ArticlePageFooterProps } from "../types/articlePropsTypes";
import CommentForm from "./commentForm";
import { useState } from "react";
import { useAppDispatch } from "../store";
import { saveCommentAction } from "../actions/articleActions";
import ArticleCommentList from "./articleComments";

export default function ArticlePageFooter({
  article,
  user,
  likeHandler,
  addToBookmarksHandler,
}: ArticlePageFooterProps) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);
  const saveCommentHandler = (comment: string) => {
    if (comment.length > 0) {
      dispatch(
        saveCommentAction({
          articleId: article.id,
          comment: { author: user, text: comment },
        })
      );
    }
  };

  return (
    <div>
      <div className="articleFooter">
        <Button
          startIcon={<RecommendOutlinedIcon />}
          color={getButtonColorForCollection(article.likes, user.id)}
          onClick={likeHandler}
          size="large"
        >
          {article.likes.length}
        </Button>
        <Button
          startIcon={<BookmarkAddOutlinedIcon />}
          color={getButtonColorForCollection(user.bookmarks, article.id)}
          onClick={addToBookmarksHandler}
          size="large"
        ></Button>
        <Button
          startIcon={<InsertCommentOutlinedIcon />}
          color="inherit"
          onClick={openHandler}
          size="large"
        >
          {article.comments.length}
        </Button>
      </div>
      <CommentForm
        open={open}
        closeHandler={closeHandler}
        saveComment={saveCommentHandler}
      />
      <ArticleCommentList comments={article.comments} />
    </div>
  );
}
