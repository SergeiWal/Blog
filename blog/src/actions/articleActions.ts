import { GET_ARTICLES } from "../constants/article";
import { Article } from "../types/articleTypes";

export interface SetArticle {
  type: string;
  payload: Array<Article>;
}

export type ArticleAction = SetArticle | any;

export const loadArticleAction = (items: Array<Article>): SetArticle => {
  return {
    type: GET_ARTICLES,
    payload: items,
  };
};
