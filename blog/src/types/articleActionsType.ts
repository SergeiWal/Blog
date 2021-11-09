import { Article, ArticleComment } from "../types/articleTypes";

export type LikePayload = {
  articleId: number;
  userId: number;
};

export type SaveCommentPayload = {
  articleId: number;
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
  payload: number;
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
