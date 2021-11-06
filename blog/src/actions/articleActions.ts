import { Article } from "../types/articleTypes";
import {
  GET_ARTICLES,
  LIKE,
  DELETE_LIKE,
  SAVE_COMMENT,
  SET_ARTICLES,
} from "../constants/article";
import {
  GetArticle,
  SetArticle,
  LikeArticle,
  LikePayload,
  SaveComment,
  SaveCommentPayload,
} from "../types/articleActionsType";

export const getArticleAction = (): GetArticle => {
  return { type: GET_ARTICLES };
};

export const setArticleAction = (items: Array<Article>): SetArticle => {
  return {
    type: SET_ARTICLES,
    payload: items,
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
