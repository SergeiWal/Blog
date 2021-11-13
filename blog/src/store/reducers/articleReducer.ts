import { Articles } from "../../article/types/articleTypes";
import { LIKE, SAVE_COMMENT } from "../../article/constants/article";
import { PayloadAction } from "@reduxjs/toolkit";
import { GET_ARTICLE_BY_ID_SUCCESS } from "../../authorization/actions/authorizeActions";
import { GET_ARTICLES_REQUEST_SUCCESS } from "../../Feed/constants/feedConstants";

const defaultArticles: Articles = [];

export default function articleReducer(
  state = defaultArticles,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case GET_ARTICLES_REQUEST_SUCCESS:
      return [...action.payload];
    case GET_ARTICLE_BY_ID_SUCCESS:
      return [...state, action.payload];
    case LIKE:
      return [...state];
    case SAVE_COMMENT:
      return [...state];
    default:
      return state;
  }
}
