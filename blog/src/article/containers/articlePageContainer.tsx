import { Article, ArticleParamsType } from "../types/articleTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DEFAULT_ARTICLE } from "../constants/article";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  bookmarksAction,
  getCommentsAction,
  likeArticleAction,
} from "../articlePageActions";
import { bookmark, findArticle, like } from "../services/articles";
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
  }, []);

  useEffect(() => {
    setArticle(findArticle(state.articles, id));
  }, [state, id]);

  const likeHandler = () => {
    dispatch(likeArticleAction(like(article, state.user)));
  };

  const addToBookmarksHandler = () => {
    dispatch(bookmarksAction(bookmark(state.user, id)));
  };

  return state.isFetching[getArticleByIdAction.type] ? (
    <ArticlePageLoader />
  ) : (
    <ArticlePage
      article={article}
      user={state.user}
      likeHandler={likeHandler}
      addToBookmarksHandler={addToBookmarksHandler}
    />
  );
}
