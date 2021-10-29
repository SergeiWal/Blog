import { Article } from "../types/articleTypes";

export interface SetArticle {
  type: string;
  payload: Array<Article>;
}

export type ArticleAction = SetArticle | any;

export const getArticleAction = (items: Array<Article>): SetArticle => {
  return {
    type: "GET_ARTICLE",
    payload: items,
  };
};
