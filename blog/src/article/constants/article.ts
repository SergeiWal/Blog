import { Article } from "../types/articleTypes";

export const LIKE: string = "LIKE";
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
