import { Article } from "./types/articleTypes";
import {
  GET_ARTICLES,
  LIKE,
  DELETE_LIKE,
  SAVE_COMMENT,
  GET_ARTICLES_LOADED,
  GET_ARTICLE_BY_ID,
  GET_ARTICLE_BY_ID_LOADED,
} from "./constants/article";
import {
  GetArticle,
  GetArticleLoaded,
  GetArticles,
  LikeArticle,
  LikePayload,
  SaveComment,
  SaveCommentPayload,
  SetArticles,
} from "./types/articleActionsType";

export const getArticleAction = (): GetArticles => {
  return { type: GET_ARTICLES };
};

export const setArticleAction = (items: Array<Article>): SetArticles => {
  return {
    type: GET_ARTICLES_LOADED,
    payload: items,
  };
};

export const getArticleByIdAction = (id: string): GetArticle => {
  return {
    type: GET_ARTICLE_BY_ID,
    payload: id,
  };
};

export const getArticleByIdLoadedAction = (
  article: Article
): GetArticleLoaded => {
  return {
    type: GET_ARTICLE_BY_ID_LOADED,
    payload: article,
  };
};

export const likeArticleAction = (payload: LikePayload): LikeArticle => {
  return {
    type: LIKE,
    payload,
  };
};

export const deleteLikeAction = (payload: LikePayload): LikeArticle => {
  return {
    type: DELETE_LIKE,
    payload,
  };
};

export const saveCommentAction = (payload: SaveCommentPayload): SaveComment => {
  return {
    type: SAVE_COMMENT,
    payload,
  };
};
