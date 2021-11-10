import { Articles } from "../types/articleTypes";
import { ArticleAction } from "../types/articleActionsType";
import {
  DELETE_LIKE,
  GET_ARTICLES,
  GET_ARTICLES_LOADED,
  GET_ARTICLE_BY_ID,
  GET_ARTICLE_BY_ID_LOADED,
  LIKE,
  SAVE_COMMENT,
} from "../constants/article";
import {} from "../types/articleActionsType";

const defaultArticles: Articles = [];

export default function articleReducer(
  state = defaultArticles,
  action: ArticleAction
) {
  switch (action.type) {
    case GET_ARTICLES:
      return state;
    case GET_ARTICLES_LOADED:
      return [...action.payload];
    case GET_ARTICLE_BY_ID:
      return state;
    case GET_ARTICLE_BY_ID_LOADED:
      return [...state, action.payload];
    case LIKE:
      return [...state];
    case DELETE_LIKE:
      return [...state];
    case SAVE_COMMENT:
      return [...state];
    default:
      return state;
  }
}
