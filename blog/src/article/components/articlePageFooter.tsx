import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { Button } from "@mui/material";
import { getButtonColorForCollection } from "../services/articles";
import { ArticlePageFooterProps } from "../types/articlePropsTypes";
import ArticleCommentList from "./articleComments";
import CommentFormContainer from "../containers/commentFormContainer";

export default function ArticlePageFooter({
  likeCount,
  isLiked,
  open,
  comments,
  likeHandler,
  addToBookmarksHandler,
  openHandler,
  closeHandler,
  saveCommentHandler,
}: ArticlePageFooterProps) {
  return (
    <div>
      <div className="articleFooter">
        <Button
          startIcon={<RecommendOutlinedIcon />}
          color={isLiked ? "success" : "inherit"}
          onClick={likeHandler}
          size="large"
        >
          {likeCount}
        </Button>
        <Button
          startIcon={<BookmarkAddOutlinedIcon />}
          // color={getButtonColorForCollection(user.bookmarks, article._id)}
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
