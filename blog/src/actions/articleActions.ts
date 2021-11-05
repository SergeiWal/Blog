import {
  GET_ARTICLES,
  LIKE,
  DELETE_LIKE,
  SAVE_COMMENT,
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

export type ArticleAction = SetArticle | LikeArticle | SaveComment | any;

export const loadArticleAction = (items: Array<Article>): SetArticle => {
  return {
    type: GET_ARTICLES,
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

export const saveCommitAction = (payload: SaveCommentPayload): SaveComment => {
  return {
    type: SAVE_COMMENT,
    payload,
  };
};
