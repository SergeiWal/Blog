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
import { Stack, Skeleton } from "@mui/material";
import { signOutAction } from "../actions/authorizeActions";

export default function ArticlePageContainer() {
  const { id } = useParams<ArticleParamsType>();
  const [article, setArticle] = useState<Article>(DEFAULT_ARTICLE);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.articles.length === 0) {
      dispatch(getArticleByIdAction(Number.parseInt(id)));
    }
  }, []);

  useEffect(() => {
    setArticle(findArticle(state.articles, Number.parseInt(id)));
  }, [state, id]);

  const likeHandler = () => {
    if (!article.likes.includes(state.user.id)) {
      dispatch(
        likeArticleAction({
          articleId: Number.parseInt(id),
          userId: state.user.id,
        })
      );
    } else {
      dispatch(
        deleteLikeAction({
          articleId: Number.parseInt(id),
          userId: state.user.id,
        })
      );
    }
  };

  const addToBookmarksHandler = () => {
    if (!state.user.bookmarks.includes(Number.parseInt(id))) {
      dispatch(
        addToBookmarksAction({
          articleId: Number.parseInt(id),
          userId: state.user.id,
        })
      );
    } else {
      dispatch(
        deleteFromBookmarksAction({
          articleId: Number.parseInt(id),
          userId: state.user.id,
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
    <div className="articleContent">
      <Stack spacing={2}>
        <Skeleton variant="rectangular" width={880} height={20} />
        <Skeleton variant="rectangular" width={880} height={20} />
        <Skeleton variant="rectangular" width={880} height={800} />
        <Skeleton variant="rectangular" width={880} height={20} />
      </Stack>
    </div>
  );
}
