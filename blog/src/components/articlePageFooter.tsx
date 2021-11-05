import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { Button } from "@mui/material";
import { getButtonColorForCollection } from "../services/articles";
import { ArticlePageFooterProps } from "../types/articlePropsTypes";
import CommentForm from "./commentForm";
import { useState } from "react";

export default function ArticlePageFooter({
  id,
  likes,
  user,
  likeHandler,
  addToBookmarksHandler,
}: ArticlePageFooterProps) {
  const [open, setOpen] = useState(false);

  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);
  const saveCommentHandler = (comment: string) => console.log(comment);

  return (
    <div>
      <div className="articleFooter">
        <Button
          startIcon={<RecommendOutlinedIcon />}
          color={getButtonColorForCollection(likes, user.id)}
          onClick={likeHandler}
        >
          {likes.length}
        </Button>
        <Button
          startIcon={<InsertCommentOutlinedIcon />}
          color="inherit"
          onClick={openHandler}
        ></Button>
        <Button
          startIcon={<BookmarkAddOutlinedIcon />}
          color={getButtonColorForCollection(
            user.bookmarks,
            Number.parseInt(id)
          )}
          onClick={addToBookmarksHandler}
        ></Button>
      </div>
      <CommentForm
        open={open}
        closeHandler={closeHandler}
        saveComment={saveCommentHandler}
      />
    </div>
  );
}
