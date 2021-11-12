import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { saveCommentAction } from "../articlePageActions";
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
  const saveCommentHandler = (text: string) => {
    if (text.length > 0) {
      article.comments.push({ author: user, text: text });
      dispatch(saveCommentAction(article));
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
