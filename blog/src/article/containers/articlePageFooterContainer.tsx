import { useState } from "react";
import { User } from "../../authorization/types/userTypes";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { saveCommentAction } from "../articlePageActions";
import ArticlePageFooter from "../components/articlePageFooter";
import { ArticlePageFooterConteinerProps } from "../types/articlePropsTypes";
import { Article } from "../types/articleTypes";

export default function ArticlePageFooterContainer({
  article,
  user,
  likeHandler,
  addToBookmarksHandler,
}: ArticlePageFooterConteinerProps) {
  const { comments, like } = useAppSelector((state) => state);

  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);
  const saveCommentHandler = (text: string) => {
    if (text.length > 0) {
      dispatch(
        saveCommentAction({ article: article, author: user, text: text })
      );
    }
  };
  return (
    <ArticlePageFooter
      open={open}
      isLiked={like.isLiked}
      likeCount={like.count}
      comments={comments}
      likeHandler={likeHandler}
      addToBookmarksHandler={addToBookmarksHandler}
      openHandler={openHandler}
      closeHandler={closeHandler}
      saveCommentHandler={saveCommentHandler}
    />
  );
}
