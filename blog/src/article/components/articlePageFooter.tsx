import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { Button } from "@mui/material";
import { ArticlePageFooterProps } from "../types/articlePropsTypes";
import ArticleCommentList from "./articleComments";
import CommentFormContainer from "../containers/commentFormContainer";

export default function ArticlePageFooter({
  likeCount,
  isLiked,
  isBookmark,
  open,
  comments,
  likeHandler,
  addToBookmarksHandler,
  openHandler,
  closeHandler,
  saveCommentHandler,
}: ArticlePageFooterProps) {
  const likedColor = isLiked ? "#3A7C7D" : "#5F626D";
  const bookmarkColor = isBookmark ? "#3A7C7D" : "#5F626D";
  return (
    <div>
      <div className="articleFooter">
        <Button
          startIcon={<RecommendOutlinedIcon style={{ color: likedColor }} />}
          onClick={likeHandler}
          size="large"
          style={{ color: likedColor }}
        >
          {likeCount}
        </Button>
        <Button
          startIcon={
            <BookmarkAddOutlinedIcon style={{ color: bookmarkColor }} />
          }
          onClick={addToBookmarksHandler}
          size="large"
        ></Button>
        <Button
          startIcon={<InsertCommentOutlinedIcon />}
          color="inherit"
          onClick={openHandler}
          size="large"
        >
          {comments.length}
        </Button>
      </div>
      <CommentFormContainer
        open={open}
        closeHandler={closeHandler}
        saveComment={saveCommentHandler}
      />
      <ArticleCommentList comments={comments} />
    </div>
  );
}
