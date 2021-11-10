import { Article, ArticleComment } from "../types/articleTypes";
import { User } from "./userTypes";

export type LikePayload = {
  article: Article;
  user: User;
};

export type SaveCommentPayload = {
  article: Article;
  comment: ArticleComment;
};

export interface GetArticles {
  type: string;
}

export interface SetArticles {
  type: string;
  payload: Array<Article>;
}

export interface GetArticle {
  type: string;
  payload: string;
}

export interface GetArticleLoaded {
  type: string;
  payload: Article;
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
  | GetArticles
  | SetArticles
  | LikeArticle
  | SaveComment
  | any;
