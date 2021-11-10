import { Article, ArticleParamsType } from "../types/articleTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DEFAULT_ARTICLE } from "../constants/article";
import { useAppDispatch, useAppSelector } from "../store";
import {
  likeArticleAction,
  deleteLikeAction,
  getArticleByIdAction,
} from "../actions/articleActions";
import {
  addToBookmarksAction,
  deleteFromBookmarksAction,
} from "../actions/userAction";
import { findArticle } from "../services/articles";
import ArticlePage from "../components/articlePage";
import { signOutAction } from "../actions/authorizeActions";
import ArticlePageLoader from "../components/loaders/articlePageLoader";

export default function ArticlePageContainer() {
  const { id } = useParams<ArticleParamsType>();
  const [article, setArticle] = useState<Article>(DEFAULT_ARTICLE);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.articles.length === 0) {
      dispatch(getArticleByIdAction(id));
    }
  }, []);

  useEffect(() => {
    setArticle(findArticle(state.articles, id));
  }, [state, id]);

  const likeHandler = () => {
    if (!article.likes.includes(state.user.id)) {
      dispatch(
        likeArticleAction({
          article: article,
          user: state.user,
        })
      );
    } else {
      dispatch(
        deleteLikeAction({
          article: article,
          user: state.user,
        })
      );
    }
  };

  const addToBookmarksHandler = () => {
    if (!state.user.bookmarks.includes(id)) {
      dispatch(
        addToBookmarksAction({
          articleId: id,
          user: state.user,
        })
      );
    } else {
      dispatch(
        deleteFromBookmarksAction({
          articleId: id,
          user: state.user,
        })
      );
    }
  };

  const signOutHandler = () => {
    dispatch(signOutAction());
  };

  return !state.isFetching ? (
    <ArticlePage
      article={article}
      user={state.user}
      likeHandler={likeHandler}
      addToBookmarksHandler={addToBookmarksHandler}
      signOutHandler={signOutHandler}
    />
  ) : (
    <ArticlePageLoader />
  );
}
