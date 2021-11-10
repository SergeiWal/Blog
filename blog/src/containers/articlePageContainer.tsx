import { Article, ArticleParamsType } from "../types/articleTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DEFAULT_ARTICLE } from "../constants/article";
import { useAppDispatch, useAppSelector } from "../store";
import {
  getArticleByIdAction,
  deleteLikeAction,
  likeArticleAction,
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
    const action = article.likes.includes(state.user.id)
      ? deleteLikeAction
      : likeArticleAction;

    dispatch(
      action({
        article: article,
        user: state.user,
      })
    );
  };

  const addToBookmarksHandler = () => {
    const action = state.user.bookmarks.includes(id)
      ? deleteFromBookmarksAction
      : addToBookmarksAction;

    dispatch(
      action({
        articleId: id,
        user: state.user,
      })
    );
  };

  const signOutHandler = () => {
    dispatch(signOutAction());
  };

  return state.isFetching ? (
    <ArticlePageLoader />
  ) : (
    <ArticlePage
      article={article}
      user={state.user}
      likeHandler={likeHandler}
      addToBookmarksHandler={addToBookmarksHandler}
      signOutHandler={signOutHandler}
    />
  );
}
