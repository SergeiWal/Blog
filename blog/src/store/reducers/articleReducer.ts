import { Articles } from "../../article/types/articleTypes";
import {
  DELETE_LIKE,
  LIKE,
  SAVE_COMMENT,
} from "../../article/constants/article";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
} from "../../Feed/articleListActions";
import {
  GET_ARTICLE_BY_ID_LOADED,
  GET_ARTICLE_BY_ID_REQUEST,
} from "../../authorization/actions/authorizeActions";
const defaultArticles: Articles = [];

export default function articleReducer(
  state = defaultArticles,
  action: PayloadAction<any>
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
