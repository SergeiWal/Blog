import { Article } from "../types/articleTypes";

export const GET_ARTICLES: string = "GET_ARTICLES";
export const LIKE: string = "LIKE";
export const DELETE_LIKE: string = "DELETE_LIKE";

export const MAX_WORDS_IN_CARD = 200;

export const DEFAULT_ARTICLE: Article = {
  id: 0,
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
