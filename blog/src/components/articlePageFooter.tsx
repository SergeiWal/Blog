import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { Button } from "@mui/material";
import { getButtonColorForCollection } from "../services/articles";
import { ArticlePageFooterProps } from "../types/articlePropsTypes";

export default function ArticlePageFooter({
  id,
  likes,
  user,
  likeHandler,
  addToBookmarksHandler,
}: ArticlePageFooterProps) {
  return (
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
      ></Button>
      <Button
        startIcon={<BookmarkAddOutlinedIcon />}
        color={getButtonColorForCollection(user.bookmarks, Number.parseInt(id))}
        onClick={addToBookmarksHandler}
      ></Button>
    </div>
  );
}
