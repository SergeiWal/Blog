import { Article } from "../types/articleTypes";
import { DEFAULT_USER } from "../../store/reducers/userReducer";

export const MAX_WORDS_IN_CARD = 200;

export const DEFAULT_ARTICLE: Article = {
  id: "0",
  author: DEFAULT_USER,
  title: "",
  subtitle: "",
  text: "",
  img: "",
  date: new Date(),
  updatedate: new Date(),
  tags: [],
  likes: [],
  comments: [],
};
