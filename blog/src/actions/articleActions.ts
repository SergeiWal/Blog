import {
  GET_ARTICLES,
  LIKE,
  DELETE_LIKE,
  SAVE_COMMENT,
  SET_ARTICLES,
} from "../constants/article";
import { Article, ArticleComment } from "../types/articleTypes";

export type LikePayload = {
  articleId: number;
  userId: number;
};

export type SaveCommentPayload = {
  articleId: number;
  comment: ArticleComment;
};

export interface GetArticle {
  type: string;
}

export interface SetArticle {
  type: string;
  payload: Array<Article>;
}

export interface LikeArticle {
  type: string;
  payload: LikePayload;
}

export interface DeleteLike {
  type: string;
  payload: LikePayload;
}

export interface SaveComment {
  type: string;
  payload: SaveCommentPayload;
}

export type ArticleAction =
  | GetArticle
  | SetArticle
  | LikeArticle
  | SaveComment
  | any;

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
