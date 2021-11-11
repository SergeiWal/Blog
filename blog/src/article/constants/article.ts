import { Article } from "../types/articleTypes";

export const GET_ARTICLES_REQUEST: string = "GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS: string = "GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILED: string = "GET_ARTICLES_FAILED";
export const GET_ARTICLE_BY_ID_REQUEST: string = "GET_ARTICLE_BY_ID_REQUEST";
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
