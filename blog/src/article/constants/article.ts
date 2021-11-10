import { Article } from "../types/articleTypes";

export const GET_ARTICLES: string = "GET_ARTICLES";
export const GET_ARTICLES_LOADED: string = "GET_ARTICLES_LOADED";
export const GET_ARTICLES_FAILED: string = "GET_ARTICLES_FAILED";
export const GET_ARTICLE_BY_ID: string = "GET_ARTICLE_BY_ID";
export const GET_ARTICLE_BY_ID_LOADED: string = "GET_ARTICLE_BY_ID_LOADED";
export const GET_ARTICLE_BY_ID_FAILED: string = "GET_ARTICLE_BY_ID_FAILED";
export const LIKE: string = "LIKE";
export const DELETE_LIKE: string = "DELETE_LIKE";
export const SAVE_COMMENT: string = "SAVE_COMMENT";

export const MAX_WORDS_IN_CARD = 200;

export const DEFAULT_ARTICLE: Article = {
  id: "0",
  name: "",
  title: "",
  subtitle: "",
  text: "",
  img: "",
  date: "",
  updatedate: "",
  tags: [],
  likes: [],
  comments: [],
};
