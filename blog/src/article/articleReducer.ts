import { Articles } from "./types/articleTypes";
import { Action } from "../store/actionTypes";
import {
  DELETE_LIKE,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLE_BY_ID_REQUEST,
  GET_ARTICLE_BY_ID_LOADED,
  LIKE,
  SAVE_COMMENT,
} from "./constants/article";

const defaultArticles: Articles = [];

export default function articleReducer(
  state = defaultArticles,
  action: Action<any>
) {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return state;
    case GET_ARTICLES_SUCCESS:
      return [...action.payload];
    case GET_ARTICLE_BY_ID_REQUEST:
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
