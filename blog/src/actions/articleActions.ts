import { GET_ARTICLES, LIKE } from "../constants/article";
import { Article } from "../types/articleTypes";

export type LikePayload = {
  articleId: number;
  userId: number;
};

export interface SetArticle {
  type: string;
  payload: Array<Article>;
}

export interface LikeArticle {
  type: string;
  payload: LikePayload;
}

export type ArticleAction = SetArticle | LikeArticle | any;

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
