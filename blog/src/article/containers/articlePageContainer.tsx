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
import { findArticle } from "../services/articles";
import ArticlePage from "../components/articlePage";
import ArticlePageLoader from "../components/articlePageLoader";
import { getArticleByIdAction } from "../../authorization/actions/authorizeActions";
import { getArticleAction } from "../../Feed/articleListActions";

export default function ArticlePageContainer() {
  const { id } = useParams<ArticleParamsType>();
  const [article, setArticle] = useState<Article>(DEFAULT_ARTICLE);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCommentsAction({ id, token: state.token }));
    dispatch(getLikeCountAction({ id, token: state.token }));
    dispatch(
      isLikeExistAction({
        like: { article: id, user: state.user._id },
        token: state.token,
      })
    );
    dispatch(
      isBookmarkAction({
        bookmark: { article: id, user: state.user._id },
        token: state.token,
      })
    );
  }, []);

  useEffect(() => {
    setArticle(findArticle(state.articles, id));
  }, [state, id]);

  useEffect(() => {
    dispatch(getArticleAction({ token: state.token }));
  }, [dispatch]);

  const likeHandler = () => {
    if (state.like.isLiked) {
      dispatch(
        deleteLikeAction({
          like: { article: id, user: state.user._id },
          token: state.token,
        })
      );
    } else {
      dispatch(
        saveLikeAction({
          like: { article, user: state.user },
          token: state.token,
        })
      );
    }
  };

  const bookmarksHandler = () => {
    if (state.bookmark.isBookmarked) {
      dispatch(
        deleteBookmarkAction({
          bookmark: { article: id, user: state.user._id },
          token: state.token,
        })
      );
    } else {
      dispatch(
        saveBookmarkAction({
          bookmark: { article, user: state.user },
          token: state.token,
        })
      );
    }
  };

  return state.isFetching[getArticleByIdAction.type] ||
    state.isFetching[getArticleAction.type] ? (
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
