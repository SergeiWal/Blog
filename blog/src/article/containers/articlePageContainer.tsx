import { Article, ArticleParamsType } from "../types/articleTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DEFAULT_ARTICLE } from "../constants/article";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  deleteBookmarkAction,
  deleteLikeAction,
  getCommentsAction,
  getLikeCountAction,
  isBookmarkAction,
  isLikeExistAction,
  saveBookmarkAction,
  saveLikeAction,
} from "../articlePageActions";
import { bookmark, findArticle } from "../services/articles";
import ArticlePage from "../components/articlePage";
import ArticlePageLoader from "../components/articlePageLoader";
import { getArticleByIdAction } from "../../authorization/actions/authorizeActions";

export default function ArticlePageContainer() {
  const { id } = useParams<ArticleParamsType>();
  const [article, setArticle] = useState<Article>(DEFAULT_ARTICLE);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCommentsAction(id));
    dispatch(getLikeCountAction(id));
    dispatch(isLikeExistAction({ article: id, user: state.user._id }));
    dispatch(isBookmarkAction({ article: id, user: state.user._id }));
  }, []);

  useEffect(() => {
    setArticle(findArticle(state.articles, id));
  }, [state, id]);

  const likeHandler = () => {
    if (state.like.isLiked) {
      dispatch(deleteLikeAction({ article: id, user: state.user._id }));
    } else {
      dispatch(saveLikeAction({ article, user: state.user }));
    }
  };

  const bookmarksHandler = () => {
    if (state.bookmark.isBookmarked) {
      dispatch(deleteBookmarkAction({ article: id, user: state.user._id }));
    } else {
      dispatch(saveBookmarkAction({ article, user: state.user }));
    }
  };

  return state.isFetching[getArticleByIdAction.type] ? (
    <ArticlePageLoader />
  ) : (
    <ArticlePage
      article={article}
      user={state.user}
      likeHandler={likeHandler}
      addToBookmarksHandler={bookmarksHandler}
    />
  );
}
