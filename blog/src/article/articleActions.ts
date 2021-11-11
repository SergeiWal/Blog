import { Article } from "./types/articleTypes";
import {
  GET_ARTICLES_REQUEST,
  LIKE,
  DELETE_LIKE,
  SAVE_COMMENT,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLE_BY_ID_REQUEST,
  GET_ARTICLE_BY_ID_LOADED,
} from "./constants/article";
import { LikePayload, SaveCommentPayload } from "./types/articleActionsType";
import { Action } from "../store/actionTypes";

export const getArticleAction = (): Action<any> => {
  return { type: GET_ARTICLES_REQUEST };
};

export const setArticleAction = (items: Array<Article>): Action<Article[]> => {
  return {
    type: GET_ARTICLES_SUCCESS,
    payload: items,
  };
};

export const getArticleByIdAction = (id: string): Action<string> => {
  return {
    type: GET_ARTICLE_BY_ID_REQUEST,
    payload: id,
  };
};

export const getArticleByIdLoadedAction = (
  article: Article
): Action<Article> => {
  return {
    type: GET_ARTICLE_BY_ID_LOADED,
    payload: article,
  };
};

export const likeArticleAction = (
  payload: LikePayload
): Action<LikePayload> => {
  return {
    type: LIKE,
    payload,
  };
};

export const deleteLikeAction = (payload: LikePayload): Action<LikePayload> => {
  return {
    type: DELETE_LIKE,
    payload,
  };
};

export const saveCommentAction = (
  payload: SaveCommentPayload
): Action<SaveCommentPayload> => {
  return {
    type: SAVE_COMMENT,
    payload,
  };
};
