import { useState } from "react";
import { useAppDispatch } from "../store";
import { saveCommentAction } from "../actions/articleActions";
import ArticlePageFooter from "../components/articlePageFooter";
import { ArticlePageFooterConteinerProps } from "../types/articlePropsTypes";

export default function ArticlePageFooterContainer({
  article,
  user,
  likeHandler,
  addToBookmarksHandler,
}: ArticlePageFooterConteinerProps) {
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
    <ArticlePageFooter
      article={article}
      user={user}
      open={open}
      likeHandler={likeHandler}
      addToBookmarksHandler={addToBookmarksHandler}
      openHandler={openHandler}
      closeHandler={closeHandler}
      saveCommentHandler={saveCommentHandler}
    />
  );
}
