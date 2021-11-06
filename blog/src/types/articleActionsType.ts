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
